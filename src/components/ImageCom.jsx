import React from "react";
import profileimage from "../assets/andy-kelly-0E_vhMVqL9g-unsplash 2.png";

function ImageCom() {
  return (
    <div className="image-container">
      <img src={profileimage} className="profimage" alt="Profile" />
      <div className="peradata">
        <p>
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <button className="buttonstart">Get free consultation</button>
      </div>
    </div>
  );
}

export default ImageCom;