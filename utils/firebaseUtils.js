import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.REACT_NATIVE_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_NATIVE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_NATIVE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_NATIVE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_NATIVE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_NATIVE_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_NATIVE_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// user authentication
export const auth = firebase.auth();

// firestore
export const firestore = firebase.firestore();

// create user profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    
    const { email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        emailAddress,
        createdAt,
        userID: userAuth.uid,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user profile", error.message);
    }
  }

  return userRef;
}