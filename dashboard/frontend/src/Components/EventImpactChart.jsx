import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchEventImpact } from "../api.js";

const EventImpactChart = () => {
  const [impactData, setImpactData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImpact = async () => {
      setLoading(true);
      try {
        const data = await fetchEventImpact(5); // default window = 5
        console.log("Event Impact Data:", data);
        // Optional: format data if needed
        setImpactData(data);
      } catch (error) {
        console.error("Error fetching event impact:", error);
      }
      setLoading(false);
    };

    loadImpact();
  }, []);

  if (loading) return <p>Loading event impact data...</p>;
  if (impactData.length === 0) return <p>No event impact data available.</p>;

  return (
    <div className="event-impact-chart chart-container">
      <h2>Event Impact (%)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={impactData}>
          <XAxis dataKey="event" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="impact_pct" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventImpactChart;
