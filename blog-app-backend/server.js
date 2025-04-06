const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Allowed origins for CORS (local + deployed frontend)
const allowedOrigins = [
  "http://localhost:5173",
  "https://blog-frontend-97rz.onrender.com", // your deployed frontend
];

// ✅ Middleware: CORS
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Middleware: JSON parsing
app.use(express.json());

// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes")); // consistent prefix

// ✅ Optional root route for health check
app.get("/", (req, res) => {
  res.send("Blog API is running...");
});

// ✅ 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: "API route not found" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
