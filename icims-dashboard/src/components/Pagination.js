import React from "react";

const Pagination = ({
  perPage,
  postsPerPage,
  totalPosts,
  currentPage,
  paginate
}) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
      <ul className="pagination">
        <li>Record per Page {perPage}</li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <span
              href="!#"
              className="page-link"
              onClick={() => paginate(number)}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
