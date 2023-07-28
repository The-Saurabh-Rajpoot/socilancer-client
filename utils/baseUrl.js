const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://socialancer-backend.onrender.com";

export default baseUrl;
