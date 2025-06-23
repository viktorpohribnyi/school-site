function Footer({ darkMode }) {
  return (
    <footer className={`py-3 mt-auto ${darkMode ? "bg-dark-theme text-light" : "bg-primary text-white"}`}>
      <div className="container text-center">
        <p className="mb-0">© {new Date().getFullYear()} Червонобаштанський ліцей. Усі права захищені.</p>
      </div>
    </footer>
  );
}

export default Footer;
