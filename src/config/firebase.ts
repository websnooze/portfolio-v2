import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from "./firebaseConfig";
import { getStorage } from "firebase/storage";

const app = initializeApp(getFirebaseConfig());
export const db = getFirestore(app);
export const storage = getStorage(app);
