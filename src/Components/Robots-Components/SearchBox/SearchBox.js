import React from "react";

const SearchBox = ({ searchField, onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        type="text"
        placeholder="Search robots here"
        className="pa3 ba b--green bg-hightest-blue w-50"
        onChange={onSearchChange}
        value={searchField}
      />
    </div>
  );
};

export default SearchBox;
