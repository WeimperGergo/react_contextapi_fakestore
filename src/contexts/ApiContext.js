import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";


export const ApiContext = createContext("");
export const ApiProvider = ({children}) => {
    const [termekLista, setTermekLista] = useState([]);
    const [kategoriaLista, setkategoriaLista] = useState([]);
    
    /* Axiossal async módon
    GET kérést indítunk a végpont felé */

/*
    const getAdat = async (vegpont) => {
        try {
            const response = await myAxios.get(vegpont);
            setTermekLista(response.data);
        } catch (error) {
            console.log("Hiba történt az adat elküldésekor.", error);
        } finally {
            
        }
    }
*/

    const getAdat = async (vegpont, callbackFuggv) => {
        try {
            const response = await myAxios.get(vegpont);
            callbackFuggv(response.data);
        } catch (error) {
            console.log("Hiba történt az adat elküldésekor.", error);
        } finally {
            
        }
    }

    const postAdat = async (vegpont, adat) => {
        try {
            const response = await myAxios.post(vegpont, adat);
            console.log(response.data);
        } catch (error) {
            console.log("Hiba történt az adat elküldésekor.", error);
        } finally {
            
        }
    }

    // let vegpont = "https://fakestoreapi.com/products"; - nem kell, alább látható hogy a base url mellé csak hozzá kell fűzni paraméterben.

    /* useEffect hook segítségével hívjuk meg az async get kéréseket
    async hívások esetén ne végtelenszer fusson le a kérés, hanem csak ha a függőség listában változás történik */
    
    useEffect(() => {
        // getAdat hívása kell ide  
    }, []); // Ha ez a [] üresen marad csak 1x frissíti.

    useEffect(() => {
        getAdat("/products", setTermekLista);   
        getAdat("/products/categories", setkategoriaLista);   
    }, []);
 

    return (
        <ApiContext.Provider value={{termekLista, kategoriaLista, postAdat}}> 
            {children}
        </ApiContext.Provider>
    )
}




