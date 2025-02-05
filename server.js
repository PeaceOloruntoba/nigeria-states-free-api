require("dotenv").config();
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Get all states, capitals, and LGAs
app.get("/api/all", async (req, res) => {
  const statesRef = db.collection("states");
  const snapshot = await statesRef.get();
  const data = [];
  snapshot.forEach((doc) => data.push({ state: doc.id, ...doc.data() }));
  res.json({ count: data.length, data });
});

// Get only states
app.get("/api/states", async (req, res) => {
  const snapshot = await db.collection("states").get();
  const states = snapshot.docs.map((doc) => doc.id);
  res.json({ count: states.length, states });
});

// Get states and capitals only
app.get("/api/states-capitals", async (req, res) => {
  const snapshot = await db.collection("states").get();
  const data = snapshot.docs.map((doc) => ({
    state: doc.id,
    capital: doc.data().capital,
  }));
  res.json({ count: data.length, data });
});

// Get only capitals
app.get("/api/capitals", async (req, res) => {
  const snapshot = await db.collection("states").get();
  const capitals = snapshot.docs.map((doc) => doc.data().capital);
  res.json({ count: capitals.length, capitals });
});

// Get states and LGAs only
app.get("/api/states-lgas", async (req, res) => {
  const snapshot = await db.collection("states").get();
  const data = snapshot.docs.map((doc) => ({
    state: doc.id,
    lgas: doc.data().lgas,
  }));
  res.json({ count: data.length, data });
});

// Get capital and LGAs only
app.get("/api/capital-lgas", async (req, res) => {
  const snapshot = await db.collection("states").get();
  const data = snapshot.docs.map((doc) => ({
    capital: doc.data().capital,
    lgas: doc.data().lgas,
  }));
  res.json({ count: data.length, data });
});

// Get only LGAs
app.get("/api/lgas", async (req, res) => {
  const snapshot = await db.collection("states").get();
  const lgas = snapshot.docs.flatMap((doc) => doc.data().lgas);
  res.json({ count: lgas.length, lgas });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
