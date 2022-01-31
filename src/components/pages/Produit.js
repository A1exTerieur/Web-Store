import React from 'react';
import Item2 from '../item2'
import ImageTablette from '../../image/Tablette.png'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Produit  = ({state}) => {
    const [panier, setPanier]= state
    const [quantite, setQuantite] = useState();


    const {name} = useParams();
    console.log(name)
    var src = `../image/${name}.png`
    console.log(ImageTablette)
    return (
        <div className="Produit ">
        <Item2 image={ImageTablette} name={name} />
        <div className="container">
            <div style={{marginTop: '50px'}}>
                <p>Adresse</p>
                <select id='btn' onChange={(e)=>{setQuantite(e.target.value)}} class="btn btn-primary" aria-label="Default select example" style={{width: '100px'}}>
                    <p>Qté</p>
                    <option value="1">Qté 1</option>
                    <option value="2">Qté 2</option>
                    <option value="3">Qté 3</option>
                </select>
            </div> 
            <div className="row">
            <button type="button" onClick={()=>setPanier(prevState=>({...prevState, [name]:quantite}))} id='btn' class="btn btn-primary btn-lg btn-block">Ajouter au panier</button>
            </div>
            <div className="row">
            <button type="button"id='btn' class="btn btn-primary btn-lg btn-block">Acheter cet article</button>
            </div>
        </div>

        </div>

    )
}

export default Produit ;