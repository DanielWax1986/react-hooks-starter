const { useState, useEffect } = React;
import { localStorageService } from "../services/storage.service.js";

export function Home() {
  const [backgroundColor, setBackgroundColor] = useState(
    localStorageService.loadFromStorage("PAGE_COLOR") || "#f6f8fc"
  );
  const [isAsideVisible, setAsideVisible] = useState(false);

  const changeBgcTheme = () => {
    setAsideVisible(!isAsideVisible);
  };

  const handleSquareClick = (color) => {
    setBackgroundColor(color);
    setAsideVisible(false);
    localStorageService.saveToStorage("PAGE_COLOR", color);
  };

  return (
    <section className="home" style={{ backgroundColor: backgroundColor }}>
      <img className="logo animate__animated animate__fadeIn animate__slower" src="assets/img/logo/logo500.png" alt="" />


      <h2>Choose your theme page color!</h2>

      <button onClick={changeBgcTheme}>
        <img className="icon-btn" src="assets/img/icons/colorpicker.png" alt="" />
      </button>

      <aside style={{ display: isAsideVisible ? "block" : "none" }}>
        <div
          className="square"
          id="square1"
          onClick={() => handleSquareClick("#85586f")}
        ></div>
        <div
          className="square"
          id="square2"
          onClick={() => handleSquareClick("#c9bbcf")}
        ></div>
        <div
          className="square"
          id="square3"
          onClick={() => handleSquareClick("#ceedc7")}
        ></div>
        <div
          className="square"
          id="square4"
          onClick={() => handleSquareClick("#d2daff")}
        ></div>
      </aside>
    </section>
  );
}




