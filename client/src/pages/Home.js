import React from "react";
import healthcare from "./../images/healthcare.jpeg";
import Auth from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";

const styles = {
  img: {
    width: "600px",
    height: "400px",
  },
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

const Home = (props) => {
  return (
    <main>
      {Auth.loggedIn() ? (
        <>
          <div className="flex-row justify-center text-center">
            <h3>
              Welcome to the {"MHII"}
              <span
                className="emoji"
                role="img"
                aria-label="heart"
                aria-hidden="false"
              >
                ❤️
              </span>
              {"AP"} {Auth.getProfile().data.username}!
            </h3>
          </div>
          <div className="flex-row justify-center text-center">
            <p>
              Would you like to view/edit your medications list or allergies?
            </p>
          </div>
          <div className="flex-row justify-center">
            <img src={healthcare} style={styles.img} />
          </div>
          <div className="flex-row justify-center">
            <Link
              className="btn btn-md m-2"
              style={styles.button}
              to="/medication"
            >
              Medications
            </Link>
            <Link
              className="btn btn-md m-2"
              style={styles.button}
              to="/allergies"
            >
              Allergies
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="flex-row justify-center text-center">
            <h3>
              Welcome to the {"MHII"}
              <span
                className="emoji"
                role="img"
                aria-label="heart"
                aria-hidden="false"
              >
                ❤️
              </span>
              {"AP"}!
            </h3>
          </div>
          <div className="flex-row justify-center text-center">
            <h4>
              <b>Take charge of your own health information!</b>
            </h4>
          </div>
          <div className="flex-row justify-center text-center">
            <p>Login or signup to start building your medication profile</p>
          </div>
          <div className="flex-row justify-center">
            <img src={healthcare} style={styles.img} />
          </div>
          <div className="flex-row justify-center">
            <p>More funtionality coming in the future!</p>
          </div>
        </>
      )}
    </main>
  );
};
export default Home;
