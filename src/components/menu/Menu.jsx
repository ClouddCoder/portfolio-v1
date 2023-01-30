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
          <ul className="header__menu__overlay__links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
