import CryptoJS from 'crypto'
import { jwtDecode } from 'jwt-decode'

export const baseUrl = "http://127.0.0.1:8000/api"

export const secretKey = "2d0dabefc800d1322e59f10ffe27ccbc4bcea2199b064f147c7ec5d6f2f41240";
// Decrypt function
const decryptData = (cipherText, secretKey) => {
    try {
        const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Decryption failed:", error);
        return null;
    }
}; 