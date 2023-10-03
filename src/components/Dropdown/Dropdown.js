import React from "react";

const Dropdown = ({ label, options, onChange, value }) => {
  return (
    <label className="d-flex d-align-center gap-3">
      {label}
      <select className="sortSelect" value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
