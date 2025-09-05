import axios from "axios";

export const apiBase = 'http://localhost:5500'

export const toUTCDate = (s) => {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
};


export const dayDiff = (startStr, endStr) => {
  const start = toUTCDate(startStr);
  const end = toUTCDate(endStr);
  if (!start || !end) return 0; // not both picked yet
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.max(1, Math.round((end - start) / msPerDay)); // exclusive of pickup day
  // If you want same-day return to count as 1 day, use:
  // return Math.max(1, Math.round((end - start) / msPerDay));
};



