import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import "../../list.css";

const HistrxnList = (props) => {
  const { data } = useQuery(QUERY_USER);

  let allergies = [];

  if (data) {
    allergies = data.user.medications.filter(data.user.medications.allergic);
  }

  if (!allergies.length) {
    return <h3>Yay! No allergies!</h3>;
  }

  return (
    <div className="wrapper">
      <div className="note">
        <div className="spiral-part">
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
          <div className="spiral">
            <div className="hole"></div>
            <div className="wire"></div>
          </div>
        </div>
        <div className="note-lines">
          <div className="line flex-row">
            <p>
              <b>Here is your current list of allergies: </b>
            </p>
          </div>
          <div className="line flex-row">
            {allergies.map((allergy) => (
              <div className="line flex-row" key={allergy._id}>
                {allergy.medName}: {allergy.reaction}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistrxnList;
