import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAO1PGU5cCbWrhabSzU8tFVc_HVHUUqiR4",
  authDomain: "hcmnexa.firebaseapp.com",
  projectId: "hcmnexa",
  storageBucket: "hcmnexa.firebasestorage.app",
  messagingSenderId: "295514391128",
  appId: "1:295514391128:web:c25207aa8aa105a3dc402d",
  measurementId: "G-XWJJYS30X6"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

// Helper function to send contact form data
export const sendContactForm = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error sending contact form:', error);
    return { success: false, error: error.message };
  }
};
