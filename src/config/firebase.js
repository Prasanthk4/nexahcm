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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
export const initializeChatSession = async () => {
  try {
    const chatRef = collection(db, 'chats');
    const docRef = await addDoc(chatRef, {
      startTime: serverTimestamp(),
      status: 'active'
    });
    console.log('✅ Chat session initialized:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('❌ Error initializing chat session:', error);
    throw error;
  }
};

// Helper function to send a chat message
export const sendChatMessage = async (chatId, message) => {
  try {
    const messagesRef = collection(db, 'chats', chatId, 'messages');
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

export const analytics = getAnalytics(app);
export { db };
export const functions = getFunctions(app);
