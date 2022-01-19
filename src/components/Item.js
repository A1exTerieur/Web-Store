import {Link } from 'react-router-dom';




export default function Item({image, name}) {
var prix = '100€';
var info = `Écran tactile capacitif 10.1" HD - rétroéclairage par LED, anti-empreintes
Processeur: MediaTek Helio P22T (8C, 8x A53 2.3 GHz)
Son châssis entièrement métallique est très lisse et son rapport écran-affichage est légèrement inférieur à 90 %`


  console.log(image)

  //<img src={image} height='300' width='240'/>
  return (


      <Link class="row" to={`/Produit/${name}`}>
        <div class="d-flex justify-content-center col-4"  style={{backgroundColor:'#F9ECE1'}}>
          <img src={image} height='300' width='240'/>

        </div>
        <div class="col-8" style={{backgroundColor:'#FFF8F2'}}>
        <div class="row">
          <p>{name}</p>
        </div>
        <div class="row">
          <p>{info}</p>
        </div>
        <div class="row">
          <p>{prix}</p>
        </div>
        </div>

      </Link>

  );

}
