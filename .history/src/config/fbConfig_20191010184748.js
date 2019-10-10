import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCOjWMN5KCqEZizok6B0PYaDbX-3gmmwDQ",
  authDomain: "projectplan-22275.firebaseapp.com",
  databaseURL: "https://projectplan-22275.firebaseio.com",
  projectId: "projectplan-22275",
  storageBucket: "projectplan-22275.appspot.com",
  messagingSenderId: "192445530537",
  appId: "1:192445530537:web:a3d8dff89ab9fb07b004b8",
  measurementId: "G-3Z1KW8YWB6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
