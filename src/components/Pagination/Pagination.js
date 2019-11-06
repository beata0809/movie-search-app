/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  handlePrevious,
  handleNext
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="mt-3 pagination pagination-lg justify-content-center">
        {
          <>
            {currentPage === 1 ? (
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
            ) : (
              <li className="page-item">
                <a
                  onClick={() => handlePrevious(currentPage)}
                  className="page-link"
                  href="#"
                >
                  Previous
                </a>
              </li>
            )}
            <li key={currentPage} className="page-item active">
              <a
                onClick={() => paginate(currentPage)}
                href="#"
                className="page-link"
              >
                {currentPage}
              </a>
            </li>
            {currentPage === pageNumbers.length ? (
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Next
                </a>
              </li>
            ) : (
              <li className="page-item">
                <a
                  onClick={() => handleNext(currentPage)}
                  className="page-link"
                  href="#"
                >
                  Next
                </a>
              </li>
            )}
          </>
        }
      </ul>
    </nav>
  );
};

export default Pagination;
