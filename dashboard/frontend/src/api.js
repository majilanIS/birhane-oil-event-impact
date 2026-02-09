import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000"; 

export const fetchPrices = async (start, end) => {
  const params = {};
  if (start) params.start = start;
  if (end) params.end = end;

  const res = await axios.get(`${BASE_URL}/prices`, { params });
  return res.data;
};

export const fetchReturns = async () => {
  const res = await axios.get(`${BASE_URL}/returns`);
  return res.data;
};

export const fetchEvents = async () => {
  const res = await axios.get(`${BASE_URL}/events`);
  return res.data;
};

export const fetchEventImpact = async (window = 5) => {
  const res = await axios.get(`${BASE_URL}/event-impact`, { params: { window } });
  return res.data;
};
