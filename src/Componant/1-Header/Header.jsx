import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [showModel, setsetshowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <div />
      <button
        onClick={() => {
          setsetshowModel(true);
        }}
        className="menu "
      >
        <span className="icon-menu flex"></span>
      </button>
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="moon"
      >
        {theme ==="dark" ? (
          <span className="icon-moon"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModel && (
        <div className="fexd">
          <ul className=" model">
            <li>
              <button
                className="icon-cancel"
                onClick={() => {
                  setsetshowModel(false);
                }}
              ></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
