
import { UserType } from '@/redux/slices/userSlice';
import CryptoJS from "crypto-js";


export function encryptData(user: UserType) {
    const userFmt = JSON.stringify(user);
    const ciphertext = CryptoJS.AES.encrypt(userFmt,import.meta.env.VITE_CRYPTOJS_SECRET_KEY).toString();
    
    return ciphertext;
}

export function decryptData(user:string) {
    const bytes  = CryptoJS.AES.decrypt(user,import.meta.env.CRYPTOJS_SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    const realUser = JSON.parse(originalText)
    console.log('originalText',realUser)
    return realUser;
}