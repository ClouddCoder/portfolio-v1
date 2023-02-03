import { useState, useEffect } from "react";
import "./Menu.css";

/**
 * Menu component to display the overlay.
 * @returns {JSX.Element} - Menu component.
 */
function Menu() {
  const [open, setOpen] = useState(false);

  const blurMainContent = () => {
    const body = document.querySelector("body");

    if (open) {
      body.classList.add("blur");
    } else {
      body.classList.remove("blur");
    }
  };

  useEffect(() => {
    blurMainContent();
  }, [open]);

  return (
    <div className="header__menu">
      {open ? (
        <button className="toggle-button close" onClick={() => setOpen(false)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      ) : (
        <button className="toggle-button" onClick={() => setOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
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
            <button className="button-resume">Resume</button>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default Menu;
