import React from 'react';

const Principal = () => {

  return (
    // <!--Carousel Wrapper-->
    <div className="contmin">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 img-slider" src="http://semanaeconomica.com/wp-content/uploads/2019/05/ABridora_Atun_primor_.jpg" alt="Post Picture"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-slider" src="https://www.codigo.pe/wp-content/uploads/2015/03/11062693_869860083074178_3067450408357419463_n.png" alt="Post Picture"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-slider" src="https://storage.googleapis.com/twg-content/images/28-5-2018-Featured-Bolivar-Peru-v2.width-1200.jpg" alt="Post Picture"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-slider" src="https://gestion.pe/resizer/9IepuAMIaSE85XpzcEZVtL0DrnQ=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NGNVG2KPPRDBFODOAPCTHRTATA.jpg"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-slider" src="http://3.bp.blogspot.com/-8-_Xa8G3Tw0/V-iLfSA3p5I/AAAAAAAAAA4/cRasQZVQO-AvrsH2joN9Yh0a9Uvf6SBDACK4B/s1600/Screen-Shot-2014-05-22-at-11.51.55-AM%2B%25281%2529.png" alt=""></img>
          </div>
            <div className="carousel-item">
            <img className="d-block w-100 img-slider" src="https://s3-eu-west-1.amazonaws.com/rankia/images/valoraciones/0009/7966/Productos-Alicorp.jpg?1359712611" alt=""></img>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Principal;