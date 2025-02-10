import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

// Firebase configuration
const firebaseConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

if (!firebaseConfig.privateKey || !firebaseConfig.clientEmail) {
  console.error("❌ Firebase credentials are missing.");
  process.exit(1);
}

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

const db = admin.firestore();
export default db;
