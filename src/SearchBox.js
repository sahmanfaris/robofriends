import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        onChange={onSearchChange}
        placeholder="search robots"
      />
    </div>
  );
};

export default SearchBox;
