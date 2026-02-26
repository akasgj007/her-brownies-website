import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">HER BROWNIES</div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#hero">Home</a>
          <a href="#brownies">Brownies</a>
          <a href="#blondies">Blondies</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </header>
    </>
  );
}

export default Header;
