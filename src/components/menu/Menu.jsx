import { useState } from "react";
import "./Menu.css";

/**
 * Menu component to display the overlay.
 * @returns {JSX.Element} - Menu component.
 */
function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header__menu">
      {open ? (
        <button id="toggle-button" onClick={() => setOpen(false)}>
          Cerrar
        </button>
      ) : (
        <button id="toggle-button" onClick={() => setOpen(true)}>
          Abrir
        </button>
      )}
      <aside className={open ? "header__menu__overlay" : "header__menu__overlay hidden"}>
        <nav className="header__menu__overlay__container">
          <ul className="header__menu__overlay__links" onClick={() => setOpen(false)}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div>
            <button>Resume</button>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default Menu;
