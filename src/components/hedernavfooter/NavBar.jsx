import { useEffect, useState } from 'react';
import '../../style/hedernavfooter.css';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenu) => {
    if (isNavbarActive && window.innerWidth < 1224) {
      setActiveSubmenu((prevSubmenu) => (prevSubmenu === submenu ? null : submenu));
    } else if (window.innerWidth >= 1224) {
      setActiveSubmenu(null);
    }
  };

  const isActive = (hash) => location.hash === hash ? 'has-text-link' : '';

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on location change
  }, [location]);

  return (
    <nav className="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item has-background-light" href="/">
          <p className="title is-5 has-text-dark"><strong>ICMASa</strong></p>
        </a>
        <a
          className={`navbar-burger ${isNavbarActive ? 'is-active' : ''}`}
          role="button"
          aria-label="menu"
          aria-expanded={isNavbarActive ? 'true' : 'false'}
          onClick={toggleNavbar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isNavbarActive ? 'is-active' : ''}`} id="menu-principal">
        <div className="navbar-end">
          <div className={`navbar-item has-dropdown is-hoverable ${activeSubmenu === 'organizacion' ? 'is-active' : ''}`}>
            <a
              className={`navbar-item navbar-item-custom ${isActive('#section-organizacion') || isActive('#section-actividades') ? 'has-text-link' : ''}`}
              onClick={() => toggleSubmenu('organizacion')}
            >
              <strong>Organización</strong>
            </a>
            <div className={`navbar-dropdown is-right ${activeSubmenu === 'organizacion' ? 'is-active' : ''}`}>
              <HashLink
                to="/institucion#section-organizacion"
                className={`navbar-item navbar-item-custom ${isActive('#section-organizacion')}`}
              >
                <strong>Autoridades</strong>
              </HashLink>
              <HashLink
                to="/institucion#section-actividades"
                className={`navbar-item navbar-item-custom ${isActive('#section-actividades')}`}
              >
                <strong>Actividades a seguir</strong>
              </HashLink>
            </div>
          </div>
          <Link
            to="/vision_mision"
            className={`navbar-item ${location.pathname === '/vision_mision' ? 'has-text-link' : ''}`}
            onClick={() => setActiveSubmenu(null)}
          >
            <strong>Visión y Misiones</strong>
          </Link>
          <div className={`navbar-item has-dropdown is-hoverable ${activeSubmenu === 'objetivos' ? 'is-active' : ''}`}>
            <a
              className={`navbar-item navbar-item-custom ${isActive('#estrategicos') || isActive('#operativos') ? 'has-text-link' : ''}`}
              onClick={() => toggleSubmenu('objetivos')}
            >
              <strong>Objetivos</strong>
            </a>
            <div className={`navbar-dropdown is-right ${activeSubmenu === 'objetivos' ? 'is-active' : ''}`}>
              <HashLink
                to="/objetivos#estrategicos"
                className={`navbar-item navbar-item-custom ${isActive('#estrategicos')}`}
              >
                <strong>Objetivos estratégicos</strong>
              </HashLink>
              <HashLink
                to="/objetivos#operativos"
                className={`navbar-item navbar-item-custom ${isActive('#operativos')}`}
              >
                <strong>Objetivos operativos</strong>
              </HashLink>
              <HashLink
                to="/objetivos#acciones"
                className={`navbar-item navbar-item-custom ${isActive('#acciones')}`}
              >
                <strong>Acciones</strong>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
