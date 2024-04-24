import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_PamoPxMohfONEmOEBfQnCNyNDBCFfHQ",
  authDomain: "e-framing.firebaseapp.com",
  projectId: "e-framing",
  storageBucket: "e-framing.appspot.com",
  messagingSenderId: "250387585872",
  appId: "1:250387585872:web:473f9bde64bd5af90f2a55",
  measurementId: "G-EZ421WZX2T"
};


const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);



// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

export const auth = getAuth(app)