import Slider from "react-slick";
import './slidetrend.css';
import trendring from "../../../../../public/assets/trend-ring.jpg";
import trendnecklace from "../../../../../public/assets/trend-Necklace.jpg";
import trendbracelets from "../../../../../public/assets/trend-bracelets.jpg"
import trendearrings from "../../../../../public/assets/trend-earrings.jpg";
import {Link} from 'react-router-dom';

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="trend-card">
            <img src={trendring} alt="" className="trend-img" />
            <Link to='/shop' className="trend-link">RING</Link>
        </div>
        <div className="trend-card">
            <img src={trendbracelets} alt="" className="trend-img" />
            <Link to='/shop' className="trend-link">BRACELETS</Link>
        </div>
        <div className="trend-card">
            <img src={trendnecklace} alt="" className="trend-img" />
            <Link to='/shop' className="trend-link">NECKLACE</Link>
        </div>
        <div className="trend-card">
            <img src={trendearrings} alt="" className="trend-img" />
            <Link to='/shop' className="trend-link">EARRINGS</Link>
        </div>
        
      </Slider>
    </div>
  );
}

export default PauseOnHover;
