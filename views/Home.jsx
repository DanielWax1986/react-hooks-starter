const { useState, useEffect } = React;

export function Home() {
  const [backgroundColor, setBackgroundColor] = useState("#f8f8f8");
  const [isAsideVisible, setAsideVisible] = useState(false);

  const changeBgcTheme = () => {
    setAsideVisible(!isAsideVisible);
  };

  const handleSquareClick = (color) => {
    setBackgroundColor(color);
    setAsideVisible(false);
  };

  return (
    <section className="home" style={{ backgroundColor: backgroundColor }}>
      <h1>Choose your theme page color!</h1>

      <button onClick={changeBgcTheme}>
        <i className="fa-solid fa-gear"></i>
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
