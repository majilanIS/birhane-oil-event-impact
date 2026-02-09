import React, { useState } from "react";

const Filters = ({ onFilter }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleApply = () => {
    onFilter({ start, end });
  };

  return (
    <div className="filters-container">
      <input
        type="date"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        placeholder="Start Date"
      />
      <input
        type="date"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        placeholder="End Date"
      />
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default Filters;
