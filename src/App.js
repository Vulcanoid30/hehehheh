import React from "react";
import "./App.css";
import { useState } from "react";
// import Card from "./Card";

function App() {
  const [currentCard, setCurrentCard] = useState(1);

  var pesanWhatsapp = "Iyah Sygkuu udh nggak marah kok";

  const handleCardClose = () => {
    setCurrentCard(currentCard + 1);
  };

  const openWa = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=6282296831858&text =" +
        pesanWhatsapp,
      "&type=phone_number&app_absent=0"
    );
  };

  return (
    <div className="container center">
      <div className="card">
        {currentCard === 1 && (
          <div>
            <h3>Sayang Aku Mau Ngomong Sesuatu Nih </h3>
            <button className="button" onClick={handleCardClose}>
              Yaudah Sayang❤️
            </button>
          </div>
        )}
        {currentCard === 2 && (
          <div>
            <h3>Sygkuu❤️</h3>
            <button className="button" onClick={handleCardClose}>
              Close❤️
            </button>
          </div>
        )}
        {currentCard === 3 && (
          <div>
            <h3>Cintaku❤️❤️❤️</h3>
            <button className="button" onClick={handleCardClose}>
              Close❤️
            </button>
          </div>
        )}
        {currentCard === 4 && (
          <div>
            <h3>Honeyboo Babyboo❤️❤️❤️</h3>
            <button className="button" onClick={handleCardClose}>
              Close❤️
            </button>
          </div>
        )}
        {currentCard === 5 && (
          <div>
            <h3>
              Aku Sayang Kamu Banyak2 Tak
              Terhingga❤️❤️❤️❤️😍❤️😍❤️😍❤️😍❤️😍❤️😍❤️😍❤️😍
            </h3>
            <button className="button" onClick={handleCardClose}>
              Close❤️
            </button>
          </div>
        )}
        {currentCard === 6 && (
          <div>
            <h3>Udah Yah Sayang Marahnya Buat Balas Pesan</h3>
            <button className="button" onClick={openWa}>
              Ini Sayang❤️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
