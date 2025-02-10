import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./dbConfig.js"; // Import db config

dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Welcome Route
app.get("/", (req, res) => {
  res.send("Welcome to the Nigeria States API! 🌍");
});

// Get all states, capitals, and LGAs
app.get("/api/all", async (req, res) => {
  try {
    const statesRef = db.collection("states");
    const snapshot = await statesRef.get();
    const data = snapshot.docs.map((doc) => ({
      state: doc.id,
      ...doc.data(),
    }));
    res.json({ count: data.length, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get only states
app.get("/api/states", async (req, res) => {
  try {
    const snapshot = await db.collection("states").get();
    const states = snapshot.docs.map((doc) => doc.id);
    res.json({ count: states.length, states });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get states and capitals only
app.get("/api/states-capitals", async (req, res) => {
  try {
    const snapshot = await db.collection("states").get();
    const data = snapshot.docs.map((doc) => ({
      state: doc.id,
      capital: doc.data().capital,
    }));
    res.json({ count: data.length, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get only capitals
app.get("/api/capitals", async (req, res) => {
  try {
    const snapshot = await db.collection("states").get();
    const capitals = snapshot.docs.map((doc) => doc.data().capital);
    res.json({ count: capitals.length, capitals });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get states and LGAs only
app.get("/api/states-lgas", async (req, res) => {
  try {
    const snapshot = await db.collection("states").get();
    const data = snapshot.docs.map((doc) => ({
      state: doc.id,
      lgas: doc.data().lgas,
    }));
    res.json({ count: data.length, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get capital and LGAs only
app.get("/api/capital-lgas", async (req, res) => {
  try {
    const snapshot = await db.collection("states").get();
    const data = snapshot.docs.map((doc) => ({
      capital: doc.data().capital,
      lgas: doc.data().lgas,
    }));
    res.json({ count: data.length, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get only LGAs
app.get("/api/lgas", async (req, res) => {
  try {
    const snapshot = await db.collection("states").get();
    const lgas = snapshot.docs.flatMap((doc) => doc.data().lgas);
    res.json({ count: lgas.length, lgas });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
