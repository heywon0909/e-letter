import { LetterState } from '../../redux/slices/letterSlice';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {get, getDatabase, ref, set} from "firebase/database"
import { UserType } from '../../redux/slices/userSlice';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.FIREBASE_DATABASE_URL,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const database = getDatabase(app);

export function signWithKakaoLogin(user:UserType) {
    const { id } = user
    return get(ref(database, `user/${id}`)).then((snapshot) => {
       
        if (!snapshot.exists()) {
            return set(ref(database, `user/${id}`), {
            ...user
            }).catch((error)=>console.error(error))
        }
    })
    
}
export function addUserLetter(userId:number,letter:LetterState) {
    return get(ref(database, `letter/${userId}`)).then(() => {
        
        return set(ref(database, `letter/${userId}/${letter.id}`), {
                ...letter
        }).catch((error) => console.error(error))
    })
}

export function addLetter(letter: LetterState) {
    return get(ref(database, `letters/${letter.id}`)).then(() => {
        return set(ref(database, `letters/${letter.id}`), {
                ...letter
        }).catch((error) => console.error(error))
    })
}
export function getLetters(userId: number,uid:string) {
    return get(ref(database, `letter/${userId}/${uid}`)).then((snapshot) => {
       
        return snapshot.val();
    })
}

export function getCompletedLetter(uid:string) {
    return get(ref(database, `letters/${uid}`)).then((snapshot) => {
       
        return snapshot.val();
    })
}
