import Services from "./Services";
import ServicesType from "./ServicesType";
import About from "./About";
import "./App.css";
import Na1 from "./components/Nav1/Na1";
import MyCarousel from "./components/myCarousel/MyCarousel";
import Footer from "./components/Footer/Footer";
import TermCondition from "./components/termsCondition/TermCondition";
import GoToTop from "./components/goToTop/GoToTop"; 

function App() {
  return (
    < >
    <div className="bg-white"> 
       <Na1/> 
       <MyCarousel/>  
      <About></About>
      <ServicesType></ServicesType>
      <Services></Services>
      <TermCondition/>
      <Footer/>
      <GoToTop />
      </div>
    </>
  );
}

export default App;
