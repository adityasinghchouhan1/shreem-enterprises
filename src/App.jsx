import Services from "./Services";
import ServicesType from "./ServicesType";
import About from "./About";
import "./App.css";
import Na1 from "./components/Nav1/Na1";
import MyCarousel from "./components/myCarousel/MyCarousel";
import Footer from "./components/Footer/Footer";
import TermCondition from "./components/termsCondition/TermCondition";

function App() {
  return (
    <>
      <div className="bg-white position-relative">
        <div className="uparrow">
          <a href="#" id="scroll">
            <i class="fa-solid fa-angle-up"></i>
          </a>
        </div>
        <Na1 />
        <MyCarousel />
        <About></About>
        <ServicesType></ServicesType>
        <Services></Services>
        <TermCondition></TermCondition>
        <Footer></Footer>
      </div>

    </>
  );
}

export default App;
