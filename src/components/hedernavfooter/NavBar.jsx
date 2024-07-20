import { useEffect, useState } from 'react';
import '../../style/hedernavfooter.css';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export default function NavBar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isSubmenuActive, setIsSubmenuActive] = useState(false);
  const [isLinkActive, setIsLinkActive] = useState(false);
  const location = useLocation();


  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const toggleSubmenu = () => {
    setIsSubmenuActive(!isSubmenuActive);
  };

  const isActive = (hash)=>{
    if (location.hash === hash){
      return true;
    }else{
      return false;
    }
  }

  useEffect(() => {
    if (location.hash === '#section-organizacion' || location.hash === '#section-actividades') {
      setIsLinkActive(true);
    } else {
      setIsLinkActive(false);
    }
  }, [location.hash]);


  return(
    <nav className="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item has-background-light" href="http://localhost:5173">
          <p className="title is-5 has-text-dark"><strong>ICMASa</strong></p>
        </a>
        <a
          /* is-active me activa el menu para ambirguesa o el menu original*/
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
      <div className={`navbar-menu ${isNavbarActive ? 'is-active' : ''}`} id="menu-principal">
        <div className='navbar-end'>
          <div className={`navbar-item has-dropdown is-hoverable ${isSubmenuActive ? 'is-active': ''}`}>
            <a
              className={`navbar-item ${isLinkActive ? 'has-text-link':''}`}
              onClick={toggleSubmenu}
            > 
              <strong>Organización</strong>
            </a>
            <div className={`navbar-dropdown is-right ${isSubmenuActive ? 'is-active is-hoverable' : ''}`}>
              <HashLink
                to="/institucion#section-organizacion"
                className={["navbar-item navbar-item-custom",
                  isActive('#section-organizacion') ? "has-text-link":"",
                ].filter(Boolean).join(" ")}
              >
                <strong>Autoridades</strong>
              </HashLink>
              <HashLink 
                to="institucion#section-actividades"
                className={["navbar-item navbar-item-custom",
                  isActive('#section-actividades') ? "has-text-link":"",
                ].filter(Boolean).join(" ")}
              >
                <strong>Acciones a seguir</strong>
              </HashLink>
            </div>
          </div>
          <Link 
            to="/about"
            className="navbar-item"
          >
            <strong>Otro Link</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
}

