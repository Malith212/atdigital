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
          <img src={profileimage} className="profimage" />
          <div className="peradata">
            <p>
              We crush your competitors, goals, and sales records - without the
              B.S.
            </p>
            <button className="buttonstart">Get free consultation</button>
          </div>
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
