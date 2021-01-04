import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {
  REACT_NATIVE_FIREBASE_APIKEY,
  REACT_NATIVE_FIREBASE_APPID,
  REACT_NATIVE_FIREBASE_AUTHDOMAIN,
  REACT_NATIVE_FIREBASE_PROJECTID,
  REACT_NATIVE_FIREBASE_STORAGEBUCKET,
  REACT_NATIVE_FIREBASE_MESSAGESENDERID,
  REACT_NATIVE_FIREBASE_MEASUREMENTID
} from "@env";

// firebase configuration with api key & IDs
var firebaseConfig = {
  apiKey: REACT_NATIVE_FIREBASE_APIKEY,
  authDomain: REACT_NATIVE_FIREBASE_AUTHDOMAIN,
  projectId: REACT_NATIVE_FIREBASE_PROJECTID,
  storageBucket: REACT_NATIVE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_NATIVE_FIREBASE_MESSAGESENDERID,
  appId: REACT_NATIVE_FIREBASE_APPID,
  measurementId: REACT_NATIVE_FIREBASE_MEASUREMENTID,
};

console.log("firebase config: " + JSON.stringify(firebaseConfig));

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// user authentication library
export const auth = firebase.auth();

// firestore library
export const firestore = firebase.firestore();

// create user profile in firestore
export const createUserProfileDocument = async (user, userProfileData) => {
  if (!user) {
    return;
  }

  //debug
  //console.log("user uid: "+ user.uid);

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // debug
    // console.log("additional data: \n" + JSON.stringify(additionalData));

    try {
      await userRef.set({
        ...userProfileData,
      });
    } catch (error) {
      console.log("Error creating user profile", error.message);
    }
  }

  return userRef;
};

// load user profile from firestore
export const loadUserProfileDocument = async (userID) => {
  let userProfileData = {};

  if (!userID) {
    return;
  }

  const userRef = firestore.doc(`users/${userID}`);

  const snapShot = await userRef.get();

  if (snapShot.exists) {
    userProfileData = snapShot.data();

    // debug
    //console.log("user profile data loaded : \n" + JSON.stringify(userProfileData));
  }

  return userProfileData;
};

// update user profile in firestore
export const updateUserProfile = async (userID, userProfileData) => {
  if (!userID) return;

  const userRef = firestore.doc(`users/${userID}`);

  const snapShot = await userRef.get();

  if (snapShot.exists) {
    try {

      await userRef.set({
        ...userProfileData,
      });
      
    } catch (error) {
      console.log("Error updating user profile: "+ error.message)
    }
  }

}