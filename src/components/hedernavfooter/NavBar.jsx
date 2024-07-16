import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../style/hedernavfooter.css';

export default function NavBar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isSubmenuActive, setIsSubmenuActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const toggleSubmenu = () => {
    setIsSubmenuActive(!isSubmenuActive);
  };

  return (
    <nav className="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item has-background-light" href="http://localhost:5173/">
          <p className="title is-5 has-text-dark"><strong>ICMASa</strong></p>
        </a>
        <a
          className={`navbar-burger ${isNavbarActive ? 'is-active' : ''}`}
          role="button"
          aria-label="menu"
          aria-expanded={isNavbarActive ? "true" : "false"}
          onClick={toggleNavbar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isNavbarActive ? 'is-active' : ''}`} id="navbarPrincipal">
        <div className="navbar-end">
          <div className={`navbar-item has-dropdown is-hoverable ${isSubmenuActive ? 'is-active' : ''}`}>
            <a 
              className="navbar-link navbarIcmasa"
              onClick={toggleSubmenu}
            >
              <strong>Autoridades</strong>
            </a>
            <div className={`navbar-dropdown ${isSubmenuActive ? 'is-active is-hoverable' : ''}`}>
              <Link
                className="navbar-item navbar-item-custom navbarIcmasa"
                to="/institucion#section-organizacion"
              >
                Organización
              </Link>
              <Link
                className="navbar-item navbar-item-custom navbarIcmasa"
                to="/institucion#section-actividades"
              >
                Actividades
              </Link>
            </div>
          </div>
          <a className="navbar-item navbarIcmasa"><strong>Otro Link</strong></a>
        </div>
      </div>
    </nav>
  );
}

