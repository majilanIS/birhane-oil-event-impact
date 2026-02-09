import React, { useState } from "react";
import PriceChart from "./Components/PriceChart";
import EventImpactChart from "./Components/EventImpactChart";
import Filters from "./Components/Filters";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({ start: "", end: "" });

  const handleFilter = (filterValues) => {
    setFilters(filterValues); // Pass to charts if needed later
    console.log("Applied Filters:", filterValues);
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1>Birhane Oil Dashboard</h1>
        <Filters onFilter={handleFilter} />
        
        <div className="chart-container price-chart">
          <PriceChart filters={filters} />
        </div>

        <div className="chart-container event-impact-chart">
          <EventImpactChart />
        </div>
      </div>
    </div>
  );
}

export default App;
