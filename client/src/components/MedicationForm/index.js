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

const MedicationForm = () => {
  const [medName, setMedName] = useState("");
  const [strength, setStrength] = useState("");
  const [direction, setDirection] = useState("");
  const [prescriber, setPrescriber] = useState("");

  const [addMedication, { error }] = useMutation(ADD_MEDICATION, {
    update(cache, { data: { addMedication } }) {
      try {
        const { medications } = cache.readQuery({
          query: QUERY_MEDICATIONS,
        });

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
          strength,
          direction,
          prescriber,
          allergic: false,
        },
      });

      setMedName("");
      setStrength("");
      setDirection("");
      setPrescriber("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "medName") {
      setMedName(value);
    } else if (name === "strength") {
      setStrength(value);
    } else if (name === "direction") {
      setDirection(value);
    } else if (name === "prescriber") {
      setPrescriber(value);
    }
  };

  return (
    <div>
      <h4>Add or update your medication list:</h4>

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
              placeholder="Strength: i.e. 30mg"
              name="strength"
              type="text"
              value={strength}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Intake Directions:"
              name="direction"
              type="text"
              value={direction}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Prescriber:"
              name="prescriber"
              type="text"
              value={prescriber}
              onChange={handleChange}
            />
            <button
              className="btn btn-block btn-primary"
              style={styles.button}
              type="submit"
            >
              Add Medication
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
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default MedicationForm;
