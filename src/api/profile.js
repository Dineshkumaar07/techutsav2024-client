import axios from "axios";

export const profile = axios.create({
  baseURL: "https://techutsav-profile-backend.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
