import Footer from "./Footer";
import Navbar from "./Navbar";
import propTypes from "prop-types";

const Container = ({ route }) => {
  return (
    <div className="main-container">
      <Navbar/>
      {<route.element/>}
      <Footer/>
    </div>
  )
}

export default Container;

Container.propTypes = {
  route: propTypes.object.isRequired,
};
