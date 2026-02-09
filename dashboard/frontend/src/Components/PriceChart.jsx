import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { fetchPrices, fetchEvents } from "../api.js";

const PriceChart = ({ filters }) => {
  const [prices, setPrices] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Fetch prices
        let priceData = await fetchPrices(filters.start, filters.end);
        priceData = priceData.map((d) => ({
          ...d,
          Date: new Date(d.Date).toLocaleDateString(), // format for X-axis
        }));

        // Fetch events
        let eventData = await fetchEvents();
        // Optionally filter events to match price range
        if (filters.start) {
          const startDate = new Date(filters.start);
          eventData = eventData.filter((e) => new Date(e.Date) >= startDate);
        }
        if (filters.end) {
          const endDate = new Date(filters.end);
          eventData = eventData.filter((e) => new Date(e.Date) <= endDate);
        }

        setPrices(priceData);
        setEvents(eventData);
      } catch (error) {
        console.error("Error loading price chart data:", error);
      }
      setLoading(false);
    };

    loadData();
  }, [filters]);

  if (loading) return <p>Loading price data...</p>;
  if (prices.length === 0) return <p>No price data available for the selected range.</p>;

  return (
    <div className="price-chart">
      <h2>Brent Oil Prices</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={prices}>
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Price" stroke="#8884d8" dot={false} />

          {/* Highlight events with vertical lines */}
          {events.map((event, i) => (
            <ReferenceLine
              key={i}
              x={new Date(event.Date).toLocaleDateString()}
              stroke="red"
              strokeDasharray="3 3"
              label={{
                value: event.Event,
                angle: -90,
                position: "insideTop",
                fill: "red",
                fontSize: 10,
              }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
