import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            onClick={() => {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

// this is a default export, we can import with any name,
// like import Header from './Header'
//  no need to use '{Header}' in the import statement
export default Header;
