const { Link, NavLink } = ReactRouterDOM;
import { localStorageService } from "../services/storage.service.js";
const { useState, useEffect } = React;

export function AppHeader() {
  const [backgroundColor, setBackgroundColor] = useState("#dba39a");

  useEffect(() => {
    const themeColor = localStorageService.loadFromStorage("PAGE_COLOR");
    if (themeColor) {
      setBackgroundColor(themeColor);
    }
  }, []);

  return (
    <header className="app-header" style={{ backgroundColor: backgroundColor }}>
      <Link to="/">
        <h3>
          <i className="fa-regular fa-chess-knight"></i> APPSUS!
          <i className="fa-solid fa-chess-knight"></i>
        </h3>
      </Link>
      <nav>
        <NavLink to="/">
          Home <i className="fa-solid fa-house"></i>
        </NavLink>
        <NavLink to="/about">
          About <i className="fa-regular fa-address-card"></i>
        </NavLink>
        <NavLink to="/mail">
          Mail <i className="fa-regular fa-envelope"></i>
        </NavLink>
        <NavLink to="/note">
          Note <i className="fa-regular fa-note-sticky"></i>
        </NavLink>
      </nav>
    </header>
  );
}
