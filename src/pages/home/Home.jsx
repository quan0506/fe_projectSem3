import SimpleSlider from "./New/slider/slider.jsx"
import Footer from "../footer/footer.jsx"
import SlideTrend from "./New/slide_trend/slidetrend.jsx";
import Bestseller from "./New/bestseller/bestseller.jsx";
import CommingSoon from "./New/commingsoon/commingsoon.jsx";

const Home = () => {
  return (
    <div >
          <SimpleSlider/> 
          <SlideTrend/>
          <Bestseller/>
          <CommingSoon />
          <Footer />

    </div>
  );
};

export default Home;
