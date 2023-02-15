import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Auth from "../../utils/auth";

const styles = {
  header: {
    background: "lightskyblue",
    color: "blue",
  },
  h1: {
    color: "blue",
  },
  button: {
    background: "blue",
    color: "white",
  },
  button2: {
    background: "white",
    color: "blue",
  },
};

const Header = (props) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="mb-4 py-3 flex-row align-center" style={styles.header}>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-primary" to="/">
            <h1 className="m-0" style={styles.h1}>
              {"MHII"}
              <span
                className="emoji"
                role="img"
                aria-label="heart"
                aria-hidden="false"
              >
                ❤️
              </span>
              {"AP"}
            </h1>
          </Link>
          <p className="m-0">My-Health-Information-In-A-Package</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link
                className="btn btn-md m-2"
                style={styles.button2}
                to="/medications"
              >
                Medications
              </Link>
              <Link
                className="btn btn-md m-2"
                style={styles.button2}
                to="/allergies"
              >
                Allergies
              </Link>
              <button
                className="btn btn-md m-2"
                style={styles.button}
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className="btn btn-md btn-info m-2"
                to="/login"
                style={styles.button}
              >
                Login
              </Link>
              <Link
                className="btn btn-md m-2"
                to="/signup"
                style={styles.button2}
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
