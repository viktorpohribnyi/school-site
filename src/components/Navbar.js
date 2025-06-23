import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark-theme" : "navbar-dark bg-primary"}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">Червонобаштанський ліцей</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Головна</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Про школу</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/news">Новини</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/teachers">Учителі</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacts">Контакти</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/testimonials">Відгуки</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/gallery">Галерея</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/eventscalendar">Календар</Link></li>
          </ul>
          <button
            className={`btn btn-sm ${darkMode ? "btn-outline-light" : "btn-outline-light"} ms-auto`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Світла тема" : "Темна тема"}
          </button>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
