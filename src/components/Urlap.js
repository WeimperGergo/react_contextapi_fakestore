import React, { useContext, useState } from 'react'
import { ApiContext } from '../contexts/ApiContext';

function Urlap() {
    const {postAdat} = useContext(ApiContext);
    
    /* Saját belső state */
    const [adat, setAdat] = useState({
        title: 'Kurbli',
        price: 1000,
        category: '...',
        description: '...',
        image: '...',
    });

    function adatKuld(event) {
        event.preventDefault();
        /* 
            Összegyűjtjük az űrlap input mezőiből az adatokat,
            összeállítunk egy objektumot,
            post kéréssel elküldjük a megfelelő végpontra
        */
        console.log("Küldés ", adat);
        /* Validálás után - formai ellenőrzés */
        postAdat("/products", adat);
    }

    function valtozasKezeles(event) {
        /* Itt frissítem a state értékét */
        const segedValtozo = {...adat}; // Objektumról csinál másolatot.
        segedValtozo[event.target.id] = event.target.value;
        setAdat({...segedValtozo});

    }


    return (
        <form onSubmit={adatKuld}>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Termék Neve
                </label>
                <input type="text" pattern='^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüűA-ZÁÉÍÓÖŐÚÜŰ ]{2,}$' value={adat.title} onChange={valtozasKezeles} className="form-control" id="title" aria-describedby="titleHelp" />
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">
                    Termék Ára
                </label>
                <input type="number" min="1" max="100000" value={adat.price} onChange={valtozasKezeles} className="form-control" id="price" aria-describedby="priceHelp" />
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Termék Neve
                </label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            

            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
    );
}

export default Urlap