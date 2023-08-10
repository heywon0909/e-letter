import { LetterState } from '../../redux/slices/letterSlice';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {get, getDatabase, ref, set, update} from "firebase/database"
import { UserType } from '../../redux/slices/userSlice';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK-KJwtxQ1e6k7zT04IJ5lyoSIEMZfGO8",
  authDomain: "e-letter-569a8.firebaseapp.com",
  databaseURL: "https://e-letter-569a8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-letter-569a8",
  storageBucket: "e-letter-569a8.appspot.com",
  messagingSenderId: "601229677495",
  appId: "1:601229677495:web:e541445af1f4092fb60e32",
  measurementId: "G-D5FWBW3PT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const database = getDatabase(app);

export function signWithKakaoLogin(user:UserType) {
    const { id } = user
    return get(ref(database, `user/${id}`)).then((snapshot) => {
        console.log('snpa', snapshot);
        if (!snapshot.exists()) {
            return set(ref(database, `user/${id}`), {
            ...user
            }).catch((error)=>console.error(error))
        }
    })
    
}
export function addLetters(userId:number,letter:LetterState) {
    return get(ref(database, `letter/${userId}`)).then((snapshot) => {
        console.log('snpa',snapshot);
        return set(ref(database, `letter/${userId}/${letter.id}`), {
                ...letter
        }).catch((error) => console.error(error))
    })
    
}
export function getLetters(userId: number,uid:string) {
    return get(ref(database, `letter/${userId}/${uid}`)).then((snapshot) => {
        console.log('snpa', snapshot.val());
        return snapshot.val();
    })
}