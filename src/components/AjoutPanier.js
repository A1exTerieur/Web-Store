import './AjoutPanier.css'

export default function AjoutPanier({Produit}) {

    return (
        <div className="container">
            <div style={{marginTop: '50px'}}>
                <p>Adresse</p>
                <select id='btn' class="btn btn-primary" aria-label="Default select example" style={{width: '100px'}}>
                    <p>Qté</p>
                    <option value="1">Qté 1</option>
                    <option value="2">Qté 2</option>
                    <option value="3">Qté 3</option>
                </select>
            </div>
            <div className="row">
            <button type="button" id='btn' class="btn btn-primary btn-lg btn-block">Ajouter au panier</button>
            </div>
            <div className="row">
            <button type="button"id='btn' class="btn btn-primary btn-lg btn-block">Acheter cet article</button>
            </div>
        </div>
    );

}