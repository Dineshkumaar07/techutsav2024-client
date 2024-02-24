import axios from "axios";

export const api = axios.create({
  baseURL: "https://techutsav-auth-backend.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
