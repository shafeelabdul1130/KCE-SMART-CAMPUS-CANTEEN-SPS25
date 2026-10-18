// Firebase backend helpers for Smart Campus Canteen.
// This file is a starter integration module. Import these helpers from the page's
// JavaScript module after adding your Firebase Web App config.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {
  getFirestore, collection, doc, getDoc, setDoc, addDoc, onSnapshot,
  query, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Admin account must be created in Firebase Authentication (Email/Password).
export function adminSignIn(email, password) {
  return signInWithEmailAndPassword(auth, email.trim(), password);
}
export function adminSignOut() {
  return signOut(auth);
}
export function watchAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

// Public menu reads; one document per day: menus/Monday, menus/Tuesday, etc.
export function watchDailyMenu(day, callback, onError = console.error) {
  return onSnapshot(doc(db, "menus", day), snap => {
    callback(snap.exists() ? (snap.data().items || []) : []);
  }, onError);
}
export async function saveDailyMenu(day, items) {
  // Firestore Security Rules must restrict writes to the approved admin email.
  return setDoc(doc(db, "menus", day), {
    day, items, updatedAt: serverTimestamp()
  }, { merge: true });
}

// Student orders are written to Firestore and can be watched by staff.
export async function createStudentOrder(order) {
  return addDoc(collection(db, "orders"), {
    ...order,
    createdAt: serverTimestamp(),
    status: "Confirmed"
  });
}
export function watchAdminOrders(callback, onError = console.error) {
  const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
  return onSnapshot(q, snapshot => callback(snapshot.docs.map(d => ({ id: d.id, ...d.data() }))), onError);
}
