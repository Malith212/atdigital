import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import profileimage from "./assets/andy-kelly-0E_vhMVqL9g-unsplash 2.png";
import FAQs from "./components/FAQs";
import WebMobileDevelopment from "./components/WebMobileDevelopment";
import Digital from "./components/Digital";
import ImageCom from "./components/ImageCom";


function App() {
  return (
    <>
      <Navbar />

      <div className="full-width-div">
        <ImageCom />
        <div className="webinter">
          <WebMobileDevelopment />
        </div>
        <div className="digital">
          <Digital />
        </div>
        <div className="faxqs">
          <FAQs />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;