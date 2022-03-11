import React, { useRef } from "react";
import "./CustomizedFilter.css";
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

  const renderItem = (item, index) => {
    if (item.initiallyChecked) {
      return (
        <div
          key={item.name}
          className="form-check d-flex flex-row align-items-center p-0"
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
                  elem.checked = false;
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
          className="form-check d-flex flex-row align-items-center p-0"
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
              />
            </div>
          </form>
        )}

        <div className={`${inputType === "checkbox" ? "data-content" : ""}`}>
          <form>
            {header !== "Sorting"
              ? renderItem({ name: "All", initiallyChecked: true }, -1)
              : ""}
            {data.map((item, index) => renderItem(item, index))}
          </form>
        </div>
      </div>
    </div>
  );
};

CustomizedFilter.defaultProps = {
  inputType: "checkbox",
  placeholderValue: null,
};

export default CustomizedFilter;
