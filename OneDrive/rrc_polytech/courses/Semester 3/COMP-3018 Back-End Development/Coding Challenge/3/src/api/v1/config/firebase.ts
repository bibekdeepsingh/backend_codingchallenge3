import admin from "firebase-admin";
import path from "path";
 
// Initialize Firestore
const serviceAccount = require(path.resolve("firebase-admin.json"));
 
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
 
const db = admin.firestore();
 
export default db;