import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_MEDICATION } from "../../utils/mutations";
import { QUERY_MEDICATIONS } from "../../utils/queries";

import Auth from "../../utils/auth";

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

const HistrxnForm = () => {
  const [medName, setMedName] = useState("");
  const [reaction, setReaction] = useState("");

  const [addMedication, { error }] = useMutation(ADD_MEDICATION, {
    update(cache, { data: { addMedication } }) {
      try {
        const { medications } = cache.readQuery({ query: QUERY_MEDICATIONS });

        cache.writeQuery({
          query: QUERY_MEDICATIONS,
          data: { medications: [addMedication, ...medications] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMedication({
        variables: {
          medName,
          reaction,
          allergic: true,
        },
      });

      setMedName("");
      setReaction("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "medName") {
      setMedName(value);
    } else if (name === "reaction") {
      setReaction(value);
    }
  };

  return (
    <div>
      <h3>Please add or update your allergy list:</h3>

      {Auth.loggedIn() ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Medication Name: REQUIRED"
              name="medName"
              type="text"
              value={medName}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="reaction"
              name="reaction"
              type="text"
              value={reaction}
              onChange={handleChange}
            />
            <button
              className="btn btn-block btn-primary"
              style={styles.button}
              type="submit"
            >
              Add Allergy
            </button>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to update your allergy list. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};
export default HistrxnForm;
