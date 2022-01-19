import React from 'react';
import Item2 from '../item2'
import AjoutPanier from '../AjoutPanier'
import ImageTablette from '../../image/tablette.png'


const Produit  = () => {

    return (
        <div className="Produit ">
        <Item2 image={ImageTablette} />
        <AjoutPanier />
        </div>
    )
}

export default Produit ;