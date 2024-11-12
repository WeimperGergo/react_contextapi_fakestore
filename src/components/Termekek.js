import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import Termek from './Termek';

function Termekek() {
    const {termekLista} = useContext(ApiContext);
    
  return (
    <div className='row cols-1 row-cols-sm-2 row-cold-md-3 g-4'>
        {
            termekLista.map((termek) => {
                return <Termek termek={termek} key={termek.id} />
            })
        }
    </div>
  )
}

export default Termekek