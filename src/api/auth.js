import axios from "axios";

export const api = axios.create({
  // baseURL: "https://techutsav-auth-backend.onrender.com",
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
