import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';
import dotenv from 'dotenv';
import serviceAccount from './firebase-adminsdk.json';

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

interface StateData {
  capital: string;
  lgas: string[];
}

// Get all states, capitals, and LGAs
app.get('/api/all', async (req, res) => {
  const statesRef = db.collection('states');
  const snapshot = await statesRef.get();
  const data: { state: string; capital: string; lgas: string[] }[] = [];
  snapshot.forEach(doc => data.push({ state: doc.id, ...doc.data() as StateData }));
  res.json({ count: data.length, data });
});

// Get only states
app.get('/api/states', async (req, res) => {
  const snapshot = await db.collection('states').get();
  const states = snapshot.docs.map(doc => doc.id);
  res.json({ count: states.length, states });
});

// Get states and capitals only
app.get('/api/states-capitals', async (req, res) => {
  const snapshot = await db.collection('states').get();
  const data = snapshot.docs.map(doc => ({ state: doc.id, capital: (doc.data() as StateData).capital }));
  res.json({ count: data.length, data });
});

// Get only capitals
app.get('/api/capitals', async (req, res) => {
  const snapshot = await db.collection('states').get();
  const capitals = snapshot.docs.map(doc => (doc.data() as StateData).capital);
  res.json({ count: capitals.length, capitals });
});

// Get states and LGAs only
app.get('/api/states-lgas', async (req, res) => {
  const snapshot = await db.collection('states').get();
  const data = snapshot.docs.map(doc => ({ state: doc.id, lgas: (doc.data() as StateData).lgas }));
  res.json({ count: data.length, data });
});

// Get capital and LGAs only
app.get('/api/capital-lgas', async (req, res) => {
  const snapshot = await db.collection('states').get();
  const data = snapshot.docs.map(doc => ({ capital: (doc.data() as StateData).capital, lgas: (doc.data() as StateData).lgas }));
  res.json({ count: data.length, data });
});

// Get only LGAs
app.get('/api/lgas', async (req, res) => {
  const snapshot = await db.collection('states').get();
  const lgas = snapshot.docs.flatMap(doc => (doc.data() as StateData).lgas);
  res.json({ count: lgas.length, lgas });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));