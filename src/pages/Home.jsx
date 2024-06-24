import Header from "../components/header/header";
import SimpleSlider from "../components/slider/slider"
import Footer from "../components/footer/footer"
import SlideTrend from "../components/slide_trend/slidetrend";
import Bestseller from "../components/bestseller/bestseller";
import CommingSoon from "../components/commingsoon/commingsoon";
import DescComment from "../components/descComment/descComment";
import Filter from "../components/filter/filter";

const Home = () => {
  return (
    <div >
          <Header />
          <SimpleSlider/> 
          <SlideTrend/>
          <Bestseller/>
          <CommingSoon />
          <DescComment />
          <Filter/>
          <Footer />

    </div>
  );
};

export default Home;
