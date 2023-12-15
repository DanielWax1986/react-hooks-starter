const { Link, NavLink } = ReactRouterDOM;

export function AppHeader() {
  return (
    <header className="app-header">
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
