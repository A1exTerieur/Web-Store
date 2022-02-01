import React from 'react';

import ImageProfil from '../../image/profil.png';
import ImagePrise from '../../image/prise.png'

const Profil = () => {

    return(
        <div className="container">
            <div className="row">
                <h1 align="center">Alexandre T</h1>
            </div>
			<div className="row ">
				<div class="d-flex p-2" style={{width:"50px",margin: 'auto'}}>
                <img src={ImageProfil}  height="300" width="300"></img>
                </div>
            </div>
            <div className="row">
            <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Adresse</span>
  </div>
  <input type="text" class="form-control" placeholder="257 rue de Franclieu 71870 Hurigny" aria-label="adress" aria-describedby="basic-addon1" value="257 rue de Franclieu 71870 Hurigny"></input>
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Mail</span>
  </div>
  <input type="text" class="form-control" placeholder="alexandre.t@banana.fr" aria-label="mail" aria-describedby="basic-addon1" value="alexandre.t@banana.fr"></input>
</div>
   <h3 align="center">Commandes passées</h3>
   <hr/>
   
           <h5 align="center">Prise</h5>
                <p>Matériaux de qualité, résistants et durables.<br/>Testé et approuvé,
                petit et léger permet une charge ultra rapide.</p>
                <div class="d-flex p-2" style={{width:"50px",}}>
                <img src={ImagePrise}  height="300" width="300"></img>
                </div>
                <p ><b>28/08/2022</b></p>
   <hr/>
   
           <h5 align="center">Prise</h5>
                <p>Matériaux de qualité, résistants et durables.<br/>Testé et approuvé,
                petit et léger permet une charge ultra rapide.</p>
                <div class="d-flex p-2" style={{width:"50px",}}>
                <img src={ImagePrise}  height="300" width="300"></img>
                </div>
                <p ><b>28/08/2022</b></p>
                
            </div>
        </div>
    )
}

export default Profil ;
