import { useState } from 'react';
import Produit from './Produit';





const Panier = ([panier]) =>{
    const displayPanier = panier.map((produit)=>
        <li class="list-group-item">{produit}</li>
    );


    return (
        <div>
            <h2>Panier</h2>
            <hr/>
            {displayPanier}
            <ul class="list-group">
               
            </ul>
        </div>
    )
}

export default Panier ;