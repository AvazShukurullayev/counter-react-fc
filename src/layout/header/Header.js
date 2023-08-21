import "./Header.css";

const Header = () => {
  return (
    <header className="header p-3 shadow border">
      <div className="container">
        <nav className="nav d-flex align-items-center justify-content-between">
          <a href="#!" className="nav__logo font-monospace fs-4 text-decoration-none text-black">
            Counter
          </a>
          <ul className="nav__list d-flex align-items-center gap-4">
            <li className="nav__item">
              <a href="#!" className="nav__link">
                About Us
              </a>
            </li>
            <li className="nav__item">
              <a href="#!" className="nav__link">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="#!" className="nav__link">
                Support &amp; Help
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
