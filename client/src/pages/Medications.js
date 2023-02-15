import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import MedicationForm from "../components/MedicationForm";
import MedicationList from "../components/MedicationList";

import { QUERY_USER } from "../utils/queries";

import Auth from "../utils/auth";

const Medications = (props) => {
  const user = Auth.getProfile().data;

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <div className="flex-row justify-center mb-3 text-center">
            <h3 className="col-12 col-md-10 text-primary p-3 mb-5">
              {user.username}, welcome to your medication profile!
            </h3>

            <div className="col-12 col-md-10 mb-5">
              <MedicationList user={user} />
            </div>
            <div className="col-12 col-md-10 mb-5">
              <MedicationForm user={user} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: "1px dotted #1a1a1a" }}
          >
            <p>
              You need to be logged in to see this. Use the navigation links
              above to // sign up or log in!
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Medications;
