import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <div>
        <div className="flex">
          <nav className="navbar">
            <ul className="nav-links">
              <li className="list-item">
                <a href="https://github.com/PratikDey">Projects</a>
              </li>
              {/* <li className="list-item">
                <a>About</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
