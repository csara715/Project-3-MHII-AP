import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const styles = {
  button: {
    background: "blue",
    color: "white",
  },
};

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button
            className="btn btn-md mb-3"
            style={styles.button}
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h6>
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>
          {" Your Health Matters "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
