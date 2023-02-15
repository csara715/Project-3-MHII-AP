import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MEDICATIONS } from "../../utils/queries";
import "../../list.css";
import Auth from "../../utils/auth";

const MedicationList = (props) => {
  const { data } = useQuery(QUERY_MEDICATIONS);

  let medications = [];

  if (data) {
    medications = data.filter(!data.allergic);
  }

  if (!medications.length) {
    return <h3>Your medication profile is currently empty!</h3>;
  }

  return (
    <>
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
              <div class="wire"></div>
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
              <div class="wire"></div>
            </div>
            <div className="spiral">
              <div className="hole"></div>
              <div className="wire"></div>
            </div>
          </div>
          <div className="note-lines">
            <div className="line flex-row">
              <p>
                <b>Here is your current list of medications: </b>
              </p>
            </div>
            {medications.map((medication) => (
              <div className="line flex-row" key={medication._id}>
                {medication.medName} {medication.stength}:{" "}
                {medication.direction}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicationList;
