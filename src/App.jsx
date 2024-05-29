import Services from "./Services";
import ServicesType from "./ServicesType";
import About from "./About";
import "./App.css";
import Na1 from "./components/Nav1/Na1";
import MyCarousel from "./components/myCarousel/MyCarousel";
import Footer from "./components/Footer/Footer";
import TermCondition from "./components/termsCondition/TermCondition";
<<<<<<< HEAD
=======
import Team from "./components/team/Team";
>>>>>>> 8b67ccb000716ea4b26593530bd4d0e930991e27

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
        <Team></Team>
        <Footer></Footer>
      </div>
<<<<<<< HEAD

=======
>>>>>>> 8b67ccb000716ea4b26593530bd4d0e930991e27
    </>
  );
}

export default App;
