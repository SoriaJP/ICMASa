import { useEffect, useState } from 'react';
import '../../style/hedernavfooter.css';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isSubmenuActive, setIsSubmenuActive] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const toggleSubmenu = () => {
    if (isNavbarActive && window.innerWidth < 1224) {
      setIsSubmenuActive(!isSubmenuActive);
    }else if(window.innerWidth >= 1224){
      setIsSubmenuActive(false);
    }
  };

  const isActive = (hash) => {
    return location.hash === hash ? 'has-text-link' : '';
  };

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
          <div className={`navbar-item has-dropdown is-hoverable ${isSubmenuActive ? 'is-active' : ''}`}>
            <a
              className={`navbar-item navbar-item-custom ${isActive('#section-organizacion') || isActive('#section-actividades') ? 'has-text-link' : ''}`}
              onClick={toggleSubmenu}
            >
              <strong>Organización</strong>
            </a>
            <div className={`navbar-dropdown is-right ${isSubmenuActive ? 'is-active' : ''}`}>
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
                <strong>Acciones a seguir</strong>
              </HashLink>
            </div>
          </div>
          <Link
            to="/objetivos"
            className={`navbar-item ${location.pathname === '/objetivos' ? 'has-text-link' : ''}`}
          >
            <strong>Objetivos</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
}
