import React from 'react';
import Item2 from '../item2'
import AjoutPanier from '../AjoutPanier'
import ImageTablette from '../../image/Tablette.png'
import { useParams } from 'react-router-dom';


const Produit  = () => {

    const {name} = useParams();
    console.log(name)
    var src = `../image/${name}.png`
    console.log(ImageTablette)
    return (
        <div className="Produit ">
        <Item2 image={ImageTablette} name={name} />
        <AjoutPanier />
        </div>
    )
}

export default Produit ;