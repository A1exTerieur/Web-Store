import React from 'react';

import ImageProfil from '../../image/profil.png';
import ImagePrise from '../../image/prise.png';
import ImageTablette from '../../image/tablette.png';

const Profil = () => {

    return(
        <div className="container">
            <div className="row">
                <h1 align="center">Alexandre T</h1>
            </div>
			<div className="row ">
				<div class="d-flex justify-content-center">
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
   <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
                <th scope="col">Article</th>
                <th scope="col">Aperçu</th>
                <th scope="col">Date</th>
                <th scope="col">Prix</th>
              </tr>
          </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Prise</td>
            <td><img src={ImagePrise} height='50' width='50'/></td>
            <td>23/02/2022</td>
            <td>29€</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Tablette</td>
            <td><img src={ImageTablette} height='50' width='50'/></td>
            <td>22/08/2022</td>
            <td>199€</td>
          </tr>


        </tbody>
        </table>
            </div>
        </div>
    )
}

export default Profil ;
