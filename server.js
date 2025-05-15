const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const priceData = [
  { District: "Bengaluru", Commodity: "Tomato", MinPrice: 800, MaxPrice: 1200 },
  { District: "Bengaluru", Commodity: "Onion", MinPrice: 600, MaxPrice: 900 },
  { District: "Belagavi", Commodity: "Sugarcane", MinPrice: 250, MaxPrice: 350 },
  { District: "Belagavi", Commodity: "Maize", MinPrice: 1500, MaxPrice: 2000 },
  { District: "Ballari", Commodity: "Paddy", MinPrice: 1200, MaxPrice: 1600 },
  { District: "Ballari", Commodity: "Cotton", MinPrice: 4000, MaxPrice: 6000 },
  { District: "Mysuru", Commodity: "Banana", MinPrice: 1000, MaxPrice: 1400 },
  { District: "Mysuru", Commodity: "Turmeric", MinPrice: 5000, MaxPrice: 7000 },
  { District: "Dharwad", Commodity: "Groundnut", MinPrice: 3000, MaxPrice: 4000 },
  { District: "Dharwad", Commodity: "Soybean", MinPrice: 2200, MaxPrice: 2800 },
  { District: "Kalaburagi", Commodity: "Pigeon Pea", MinPrice: 4800, MaxPrice: 6000 },
  { District: "Kalaburagi", Commodity: "Wheat", MinPrice: 1800, MaxPrice: 2200 },
  { District: "Shivamogga", Commodity: "Arecanut", MinPrice: 22000, MaxPrice: 30000 },
  { District: "Shivamogga", Commodity: "Pepper", MinPrice: 30000, MaxPrice: 38000 },
  { District: "Raichur", Commodity: "Chili", MinPrice: 10000, MaxPrice: 15000 },
  { District: "Raichur", Commodity: "Cotton", MinPrice: 4000, MaxPrice: 5500 },
  { District: "Mandya", Commodity: "Sugarcane", MinPrice: 280, MaxPrice: 330 },
  { District: "Mandya", Commodity: "Paddy", MinPrice: 1300, MaxPrice: 1700 },
  { District: "Tumakuru", Commodity: "Ragi", MinPrice: 2000, MaxPrice: 2500 },
  { District: "Tumakuru", Commodity: "Groundnut", MinPrice: 3100, MaxPrice: 3900 },
];

app.get("/api/prices", (req, res) => {
  try {
    res.json(priceData);
  } catch (error) {
    console.error("Error serving price data:", error);
    res.status(500).json({ error: "Failed to load price data" });
  }
});

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});