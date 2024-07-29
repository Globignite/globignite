import React from "react";
 
const SearchOverlay = () => {
  return (
    <div className="search-overlay">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="search-layer"></div>
          <div className="search-layer"></div>
          <div className="search-layer"></div>
          <div className="search-close">
            <span className="search-close-line"></span>
            <span className="search-close-line"></span>
          </div>
          <div className="search-form">
            <form>
              <input
                type="text"
                className="input-search"
                placeholder="Search here..."
              />
              <button type="submit">
                <i className="flaticon-loupe"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
