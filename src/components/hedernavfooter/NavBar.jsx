import { useState } from 'react';
import '../../style/hedernavfooter.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isSubmenuActive, setIsSubmenuActive] = useState(false);


  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const toggleSubmenu = () => {
    setIsSubmenuActive(!isSubmenuActive);
  };

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
              className='navbar-item'
              onClick={toggleSubmenu}
            > 
              <strong>Organización</strong>
            </a>
            <div className={`navbar-dropdown is-right ${isSubmenuActive ? 'is-active is-hoverable' : ''}`}>
              <NavLink 
                to="/institucion#section-organizacion"
                className={(isActive)=>[
                  "navbar-item navbar-item-custom",
                  isActive.isActive ? "item-active-custom": "",
                ].filter(Boolean).join(" ")}
              >
                <strong>Autoridades</strong>
              </NavLink>
              <NavLink 
                to="/institucion#section-actividades"
                className={(isActive)=>[
                  "navbar-item navbar-item-custom",
                  isActive.isActive ? "item-active-custom": "",
                ].filter(Boolean).join(" ")}
              >
                <strong>Acciones a seguir</strong>
              </NavLink>
            </div>
          </div>
          <NavLink 
            to="/about"
            end
            className={(isActive)=>[
              "navbar-item",
              isActive.isActive ? "item-active-custom": "",
            ].filter(Boolean).join(" ")}
          >
            <strong>Otro Link</strong>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

