export default function Item2({image, name}) {


    console.log(image)
    //<img src={image} height='300' width='240'/>
    return (
  
  
        <div>
            <div className="container" style={{backgroundColor: '#FFFBF6'}}>
                <div className="row">
                    <p>Marque : marque</p>
                    <h2>{name}</h2>
                </div>
          <div className="row" style={{backgroundColor: '#F9ECE1', maxWidth: '1092px', maxHeight: '595px', margin: 'auto'}}>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
<div class="carousel-inner">
<div class="carousel-item active">
<img class="d-block w-100" src={image} alt="First slide"/>
</div>
<div class="carousel-item">
<img class="d-block w-100" src={image} alt="First slide"/>
</div>
<div class="carousel-item">
<img class="d-block w-100" src={image} alt="First slide"/>
</div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</a>
</div>
        </div>
        <div className="row" style={{backgroundColor:'#FFF8F2'}}>
        <div className="col-6">
          Prix
          </div>
          <div className="col-6">
          info
          </div>
          </div>

          </div>
        </div>
  
    );
  
  }