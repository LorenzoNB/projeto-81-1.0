import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCamocQCpM2GujNMmpUm-CwCKNUempHB2M",
  authDomain: "ciclista-2.firebaseapp.com",
  projectId: "ciclista-2",
  storageBucket: "ciclista-2.appspot.com",
  messagingSenderId: "829085706968",
  appId: "1:829085706968:web:f1a1e5f721c6c5962805ad"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
