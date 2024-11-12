/* axios konfigurációs fájlja */
import axios from "axios";

// Saját myAxios példány létrehozása és konfigurálása

export const myAxios = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 10000,
    headers: { 
        'Content-Type': 'application/json',
    }
});