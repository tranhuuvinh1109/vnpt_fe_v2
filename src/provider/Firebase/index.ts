import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
});

export const firebaseAuth = getAuth(app);
export const storage = getStorage(app);
export const db = getDatabase(app);

const addDataToFirebase = async (refPath: string, value: unknown) => {
  const dbRef = ref(db, `data/${refPath}`);

  try {
    await push(dbRef, value);
  } catch (error) {
    console.error("Error adding data:", error);
  }
};

const setDataToFirebase = async (refPath: string, value: unknown) => {
  const dbRef = ref(db, `data/${refPath}`);

  try {
    await set(dbRef, value);
  } catch (error) {
    console.error("Error adding data:", error);
  }
};

const uploadImageToFirebase = async (file: File, folderPath: string): Promise<string | null> => {
  if (!file) {
    throw new Error("No file provided");
  }

  const fileRef = storageRef(storage, `${folderPath}/${file.name}`);

  try {
    const snapshot = await uploadBytes(fileRef, file);

    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log("File available at:", downloadURL);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};

export { addDataToFirebase, setDataToFirebase, uploadImageToFirebase };

export default app;
