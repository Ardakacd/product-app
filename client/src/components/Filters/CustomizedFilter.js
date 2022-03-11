import React, { useRef, useState } from "react";
import "./CustomizedFilter.css";
import PropTypes from "prop-types";

/**
 *
 * Common component for other filter components.
 */
const CustomizedFilter = ({
  header,
  inputType,
  placeholderValue,
  data,
  clickedTag,
}) => {
  let isAllSelected = true;
  const allOptionRef = useRef();
  const otherOptionsRef = useRef([]);
  const [searchFilter, setSearchFilter] = useState("");

  const renderItem = (item, index, isDisplayed) => {
    if (item.initiallyChecked) {
      return (
        <div
          key={item.name}
          className={`form-check d-flex flex-row align-items-center p-0 ${
            isDisplayed ? "" : "d-none"
          }`}
        >
          <input
            type={inputType}
            name={`${header}Options`}
            id={`${header}${index}`}
            ref={allOptionRef}
            value={item.name}
            onChange={(event) => {
              if (
                header !== "Sorting" &&
                isAllSelected === true &&
                event.target.checked === false
              ) {
                event.target.checked = true;
                return;
              } else if (
                header !== "Sorting" &&
                event.target.checked === true
              ) {
                otherOptionsRef.current.map((elem) => {
                  return (elem.checked = false);
                });
                isAllSelected = true;
              }
              clickedTag(item.name, event.target.checked);
            }}
            defaultChecked={true}
          />
          <label htmlFor={`${header}${index}`}>{item.name}</label>
        </div>
      );
    } else {
      return (
        <div
          key={item.name}
          className={`form-check d-flex flex-row align-items-center p-0 ${
            isDisplayed ? "" : "d-none"
          }`}
        >
          <input
            type={inputType}
            name={`${header}Options`}
            ref={(el) => (otherOptionsRef.current[index] = el)}
            id={`${header}${index}`}
            value={item.name}
            onChange={(event) => {
              if (header !== "Sorting" && event.target.checked) {
                allOptionRef.current.checked = false;
                isAllSelected = false;
              } else if (header !== "Sorting") {
                let checkedCount = otherOptionsRef.current.find(
                  (el) => el.checked === true
                );
                if (!checkedCount) {
                  allOptionRef.current.checked = true;
                  isAllSelected = true;
                }
              }

              if (header === "Brands") {
                clickedTag(item.slug, event.target.checked);
              } else {
                clickedTag(item.name, event.target.checked);
              }
            }}
          />
          <label htmlFor={`${header}${index}`}>{item.name}</label>
        </div>
      );
    }
  };
  return (
    <div
      className={`d-flex flex-column ${inputType === "checkbox" ? "mt-4" : ""}`}
    >
      <h6 className="mt-0 h6">{header}</h6>
      <div className="filter-content p-3">
        {placeholderValue && (
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control shadow-none"
                id="filterForm"
                placeholder={placeholderValue}
                onChange={(event) =>
                  setSearchFilter(event.target.value.toLowerCase())
                }
              />
            </div>
          </form>
        )}

        <div className={`${inputType === "checkbox" ? "data-content" : ""}`}>
          <form>
            {header !== "Sorting"
              ? "all".startsWith(searchFilter)
                ? renderItem({ name: "All", initiallyChecked: true }, -1, true)
                : renderItem({ name: "All", initiallyChecked: true }, -1, false)
              : ""}
            {data.map((item, index) => {
              if (item.name.toLowerCase().startsWith(searchFilter)) {
                return renderItem(item, index, true);
              } else {
                return renderItem(item, index, false);
              }
            })}
          </form>
        </div>
      </div>
    </div>
  );
};

CustomizedFilter.propTypes = {
  /** Text that is displayed at the top of the filter. */
  header: PropTypes.string,
  /** Type attribute of the input. Either checkbox or radio. */
  inputType: PropTypes.string,
  /** Placeholder value for text input. */
  placeholderValue: PropTypes.string,
  /** List of the filter elements. */
  data: PropTypes.array,
  /** Function that is executed when checkbox or radio is clicked. This function is implemented in the parent component. */
  clickedTag: PropTypes.func,
};

CustomizedFilter.defaultProps = {
  inputType: "checkbox",
  placeholderValue: "",
};

export default CustomizedFilter;
