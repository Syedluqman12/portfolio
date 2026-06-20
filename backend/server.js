import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
//import connectDB from "./config/db.js";

dotenv.config();


//connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Backend Running Successfully 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});