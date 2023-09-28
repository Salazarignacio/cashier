import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABctU9iL63MDnu6oGLJXzjkYvQOeIhKbg",
  authDomain: "cobros-b364a.firebaseapp.com",
  projectId: "cobros-b364a",
  storageBucket: "cobros-b364a.appspot.com",
  messagingSenderId: "657229982610",
  appId: "1:657229982610:web:846dd4e09691e7be70af4b",
  measurementId: "G-GE87B7G0K3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);