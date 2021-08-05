import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="ant-pagination" unselectable="unselectable">
        {/* <li
          title="Previous Page"
          className="ant-pagination-prev ant-pagination-disabled"
        >
          <button
            className="ant-pagination-item-link"
            type="button"
            tabindex="-1"
            disabled=""
          >
            <span role="img" aria-label="left" class="anticon anticon-left">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="left"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
              </svg>
            </span>
          </button>
        </li> */}

        {pageNumbers.map((number) => (
          <li
            key={number}
            title="1"
            className="ant-pagination-item ant-pagination-item-active"
            tabindex="0"
            onClick={() => {
              paginate(number);
            }}
          >
            <a>{number}</a>
          </li>
        ))}

        {/* <li title="Next Page" tabindex="0" className="ant-pagination-next">
          <button
            className="ant-pagination-item-link"
            type="button"
            tabindex="-1"
          >
            <span role="img" aria-label="right" class="anticon anticon-right">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="right"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
              </svg>
            </span>
          </button>
        </li>*/}
      </ul>
    </div>
  );
};

export default Pagination;
