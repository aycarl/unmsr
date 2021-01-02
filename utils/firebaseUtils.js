import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { add } from "react-native-reanimated";

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
export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }

  console.log("user uid: "+ user.uid);

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    
    // console.log("additional data: \n" + JSON.stringify(additionalData));

    try {
      await userRef.set({
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user profile", error.message);
    }
  }

  return userRef;
}

export const loadUserProfileDocument = async (userID) => {

  let userProfileData = {};

  if (!userID) {
    return;
  }

  const userRef = firestore.doc(`users/${userID}`);

  const snapShot = await userRef.get();

  if (snapShot.exists) {

    userProfileData = snapShot.data();
    
    console.log("user profile data loaded : \n" + JSON.stringify(userProfileData));
  }

  return userProfileData;
}