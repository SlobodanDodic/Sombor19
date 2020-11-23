import React, { useState } from "react";
import lampOnIcon from "../Assets/icons/lampOn.png";
import lampOffIcon from "../Assets/icons/lampOff.png";
import globeIcon from "../Assets/icons/globe.gif";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="text-center">
      {isClicked ? (
        <div
          style={{
            height: "86vh",
            backgroundColor: "rgb(0,0,0, 0.65)",
          }}
        >
          <img
            style={{
              opacity: "45%",
            }}
            className="lamp"
            src={lampOffIcon}
            alt="lamp"
            onClick={() => setIsClicked(!isClicked)}
          />
          <div
            style={{
              opacity: "19%",
            }}
            className="estrellas inverso"
          >
            <span>ć</span>
            <span>o</span>
            <span>N</span>
            <span>u</span>
            <span>k</span>
            <span>a</span>
            <span>L</span>
          </div>
          <div className="wrapper">
            <img
              style={{
                paddingTop: "17vh",
                width: "10rem",
                opacity: "0.76",
              }}
              src={globeIcon}
              alt="Globe"
            />
          </div>
          <div className="home-div">
            <p>Sombor</p>
          </div>
        </div>
      ) : (
        <div>
          <img
            className="lamp"
            src={lampOnIcon}
            alt="lamp"
            onClick={() => setIsClicked(!isClicked)}
          />
          <div className="estrellas inverso">
            <span>e</span>
            <span>m</span>
            <span>o</span>
            <span>c</span>
            <span>l</span>
            <span>e</span>
            <span>W</span>
          </div>
          <div className="wrapper">
            <img
              style={{
                paddingTop: "17vh",
                width: "10rem",
                opacity: "0.55",
              }}
              src={globeIcon}
              alt="Globe"
            />
          </div>
          <div className="home-div">
            <p>Apartments</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
