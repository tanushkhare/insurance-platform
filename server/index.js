import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import policyRoutes from "./routes/policyRoutes.js";

import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

/* ==========================================
   MIDDLEWARE
========================================== */

app.use(cors());

app.use(express.json());

app.use(cookieParser());

/* ==========================================
   DEBUG ENV VARIABLES
========================================== */

console.log("=================================");
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("=================================");

/* ==========================================
   MONGODB CONNECTION
========================================== */

mongoose
  .connect(process.env.MONGO_URI)
  .then((conn) => {
    console.log("✅ MongoDB Connected Successfully");
    console.log("Host:", conn.connection.host);
    console.log("Database:", conn.connection.name);
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log("Error Name:", err.name);
    console.log("Error Message:", err.message);
    console.log("Full Error:", err);
  });

mongoose.connection.on("connected", () => {
  console.log("🟢 Mongoose Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("🔴 Mongoose Error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("🟡 Mongoose Disconnected");
});

/* ==========================================
   ROUTES
========================================== */

app.use("/api/auth", authRoutes);

app.use("/api/policies", policyRoutes);

/* ==========================================
   TEST ROUTE
========================================== */

app.get("/", (req, res) => {
  res.send("Insurance API Running");
});

/* ==========================================
   ERROR MIDDLEWARE
========================================== */

app.use(notFound);

app.use(errorHandler);

/* ==========================================
   SERVER
========================================== */

export default app;