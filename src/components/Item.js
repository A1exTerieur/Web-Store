




export default function Item({image}) {


  console.log(image)

  //<img src={image} height='300' width='240'/>
  return (


      <div class="row">
        <div class="d-flex justify-content-center col-4"  style={{backgroundColor:'#F9ECE1'}}>
          <img src={image} height='300' width='240'/>

        </div>
        <div class="col-8" style={{backgroundColor:'#FFF8F2'}}>
        info
        </div>
        
      </div>

  );

}
