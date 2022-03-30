import { toMultiplayer } from "App";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import ModeSelect from "../../components/ModeSelect/ModeSelect";
import Multiplayer from "../../components/Multiplayer/Multiplayer";
import TicTacGridSinglePlayer from "../../components/TicTacGridSinglePlayer/TicTacGridSinglePlayer";


import "./Playscreen.scss";

function PlayScreen() {
  const [childData, setChildData] = useState("");
  const { isMulti, setIsmulti } = useContext(toMultiplayer);


 

  //-Parent Callback to conditionally render pages
  const switchScreen = (switchTo) => {
    switch (switchTo) {
      case "single-player":
        return <TicTacGridSinglePlayer parentCallback={handleCallback} />;
      case "multiplayer":
        return <Multiplayer parentCallback={handleCallback} />;
      default:
        return <ModeSelect parentCallback={handleCallback} />;
    }
  };

  useEffect(() => {
    isMulti && handleCallback("multiplayer");
  }, [isMulti])
  
  const handleCallback = (childData) => {
    setChildData(childData);
  };

  return (
    <div className="playscreen">
      <h1 className="heading">Tic Tac Toe</h1>
      {switchScreen(childData)}
      <Footer />
    </div>
  );
}

export default PlayScreen;
