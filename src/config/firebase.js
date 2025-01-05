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

// Initialize Firebase
let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  
  // Verify initialization
  const verifyDb = async () => {
    try {
      const testCollection = collection(db, '_test_init');
      await addDoc(testCollection, {
        test: true,
        timestamp: serverTimestamp()
      });
      console.log('✅ Firebase and Firestore initialized successfully');
    } catch (error) {
      console.error('❌ Error verifying Firestore:', error);
      throw error;
    }
  };
  
  verifyDb().catch(console.error);
} catch (error) {
  console.error('❌ Error initializing Firebase:', error);
}

export const analytics = getAnalytics(app);
export { db };
export const functions = getFunctions(app);

// Helper function to send contact form data
export const sendContactForm = async (formData) => {
  if (!db) {
    console.error('❌ Firestore not initialized');
    return { success: false, error: 'Database not initialized' };
  }

  try {
    console.log('📤 Attempting to send form data:', formData);
    const contactsRef = collection(db, 'contacts');
    const docRef = await addDoc(contactsRef, {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new',
      emailPending: true // Mark that email notification is pending
    });
    console.log('✅ Document written with ID:', docRef.id);
    return { 
      success: true, 
      id: docRef.id,
      message: 'Your message has been received! We will get back to you soon.'
    };
  } catch (error) {
    console.error('❌ Detailed error sending contact form:', error);
    return { 
      success: false, 
      error: error.message,
      code: error.code,
      details: error.toString()
    };
  }
};
