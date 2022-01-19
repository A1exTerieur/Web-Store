export default function Item2({image}) {


    console.log(image)
    //<img src={image} height='300' width='240'/>
    return (
  
  
        <div>
            <div className="container">
                <div className="row">
                    <p>Marque : marque</p>
                    <h2>tablette</h2>
                </div>
          <div className="row" style={{backgroundColor: 'gray', maxWidth: '1092px', maxHeight: '595px'}}>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

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
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>
</div>
        </div>
          <div className="row" style={{backgroundColor:'#FFF8F2'}}>
          info
          </div>


          </div>
        </div>
  
    );
  
  }