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
<<<<<<< HEAD
=======
      <TermCondition/>
      <Footer/>
      <GoToTop />
      </div>
>>>>>>> 1330081a77043604ee727284366f61d4b24c7a6b
    </>
  );
}

export default App;
