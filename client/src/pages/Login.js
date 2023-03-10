import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const styles = {
  card: {
    background: "lightskyblue",
    color: "blue",
  },
  button: {
    background: "lightskyblue",
    color: "blue",
    cursor: "pointer",
  },
};

const Login = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header p-2" style={styles.card}>
            Login
          </h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="btn btn-block"
                style={styles.button}
                type="submit"
              >
                Submit
              </button>
            </form>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                Your email or password is invalid!
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
