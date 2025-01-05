import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, enableIndexedDbPersistence } from 'firebase/firestore';
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
  .then(() => {
    console.log('✅ Firestore persistence enabled');
  })
  .catch((err) => {
    console.warn('⚠️ Firestore persistence error:', err);
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser does not support persistence.');
    }
  });

// Helper function to initialize collections
const initializeCollections = async () => {
  try {
    // Test write to verify database access
    const testRef = collection(db, '_test_init');
    await addDoc(testRef, {
      test: true,
      timestamp: serverTimestamp()
    });

    // Initialize chat collections if they don't exist
    const chatSessionsRef = collection(db, 'chatSessions');
    await addDoc(chatSessionsRef, {
      _init: true,
      timestamp: serverTimestamp()
    });

    console.log('✅ Firebase and Firestore collections initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing Firestore collections:', error);
    throw error;
  }
};

// Initialize collections
initializeCollections().catch(console.error);

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
      emailPending: true
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

// Helper function to initialize a chat session
export const initializeChatSession = async (sessionId) => {
  if (!db) {
    throw new Error('Firestore not initialized');
  }

  try {
    const chatSessionsRef = collection(db, 'chatSessions');
    const docRef = await addDoc(chatSessionsRef, {
      sessionId,
      startTime: serverTimestamp(),
      status: 'active',
      lastActivity: serverTimestamp()
    });
    console.log('✅ Chat session initialized:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('❌ Error initializing chat session:', error);
    throw error;
  }
};

// Helper function to send a chat message
export const sendChatMessage = async (sessionId, message) => {
  if (!db) {
    throw new Error('Firestore not initialized');
  }

  try {
    const messagesRef = collection(db, 'chatSessions', sessionId, 'messages');
    const docRef = await addDoc(messagesRef, {
      ...message,
      timestamp: serverTimestamp()
    });
    console.log('✅ Chat message sent:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('❌ Error sending chat message:', error);
    throw error;
  }
};
