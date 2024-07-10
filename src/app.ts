import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./db";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://arghyas-portfolio.vercel.app/"],
  })
);
app.use(express.json());

connectDB();

// Routes
import { BlogRouter } from "./routes";

// setup routes
app.use("/blog", BlogRouter);

app.get("/", (req, res) => {
  res.send("Hello from Arghya!");
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
