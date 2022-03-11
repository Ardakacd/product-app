import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
const Pagination = ({ items, setSelectedItems }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 16;
  const nextLabel = () => {
    return (
      <div className="d-flex flex-row align-items-center gray-colored ms-2 text-decoration-none">
        <p className="mb-0 blue-hovored">Next</p>
        <i className="fa-solid fa-arrow-right ms-2 blue-hovored"></i>
      </div>
    );
  };
  const previousLabel = () => {
    return (
      <div className="d-flex flex-row align-items-center blue-colored me-2 text-decoration-none">
        <i className="fa-solid fa-arrow-left me-2 blue-hovored"></i>
        <p className="mb-0 blue-hovored">Prev</p>
      </div>
    );
  };
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setSelectedItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="d-flex flex-row justify-content-center mt-3">
      <ReactPaginate
        nextLabel={nextLabel()}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLinkClassName="non-text-decorated"
        nextLinkClassName="non-text-decorated"
        previousLabel={previousLabel()}
        pageLinkClassName="gray-colored non-text-decorated"
        breakLabel="..."
        pageClassName="page-item"
        containerClassName="page-container"
        activeClassName="selected-page"
        activeLinkClassName="white-colored"
        renderOnZeroPageCount={null}
      />
    </div>
    /*
    <div className="d-flex flex-row justify-content-center">
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row align-items-center blue-colored">
          <i className="fa-solid fa-arrow-left me-2 "></i>
          <p className="mb-0">Prev</p>
        </div>
        <div>{renderPageNumber}</div>
        <div className="d-flex flex-row align-items-center gray-colored">
          <p className="mb-0">Next</p>
          <i className="fa-solid fa-arrow-right ms-2 "></i>
        </div>
      </div>
    </div>
    */
  );
};

export default Pagination;
