import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCovvF04YkM7FbyrSQQ4I5mVn6jPGBk80E",
  authDomain: "unm-sr.firebaseapp.com",
  projectId: "unm-sr",
  storageBucket: "unm-sr.appspot.com",
  messagingSenderId: "244200811509",
  appId: "1:244200811509:web:04f9f69bf39da97dee4ebc",
  measurementId: "G-3ZPVDC09BC"
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