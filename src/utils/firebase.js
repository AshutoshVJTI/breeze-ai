
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCsweKG_QfFqyQ3fFoiMDXArL1wCJKSdfU",
    authDomain: "breezeai-36898.firebaseapp.com",
    projectId: "breezeai-36898",
    storageBucket: "breezeai-36898.appspot.com",
    messagingSenderId: "887745164540",
    appId: "1:887745164540:web:ccac9c23bf94bbb81d5379"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;