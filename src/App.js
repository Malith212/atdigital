import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import profileimage from "./assets/andy-kelly-0E_vhMVqL9g-unsplash 2.png";
import FAQs from "./components/FAQs";
import WebMobileDevelopment from "./components/WebMobileDevelopment";
import Digital from "./components/Digital";


function App() {
  return (
    <>
      <Navbar />
      <div>
        <div className="full-width-div">
          <img src={profileimage} className="full-width" />
        </div>
      </div>
      <WebMobileDevelopment />
      <Digital />

      <FAQs />
      <Footer />
    </>
  );
}

export default App;
