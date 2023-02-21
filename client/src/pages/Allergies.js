import React from "react";

import HistrxnForm from "../components/HistrxnForm";
import HistrxnList from "../components/HistrxnList";

import Auth from "../utils/auth";

const Allergies = () => {
  const user = Auth.getProfile().data.username;

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <div className="flex-row justify-center mb-3 text-center">
            <h3 className="col-12 col-md-10 text-primary p-3 mb-5">
              {user}, welcome to your allergy profile!
            </h3>

            <div className="col-12 col-md-10 mb-5">
              <HistrxnList />
            </div>
            <div className="col-12 col-md-10 mb-5">
              <HistrxnForm />
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

export default Allergies;
