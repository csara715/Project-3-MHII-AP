import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MEDICATIONS } from "../../utils/queries";
import "../../list.css";

const HistrxnList = (props) => {
  const { data } = useQuery(QUERY_MEDICATIONS);

  let medications = [];

  if (data) {
    medications = data.medications;
  } else {
    return <h3>Yay! No allergies!</h3>;
  }

  // const [removeMedication, { error }] = useMutation(REMOVE_MEDICATION, {
  //   update(cache, { data: { removeMedication } }) {
  //     try {
  //       const { medications } = cache.readQuery({
  //         query: QUERY_MEDICATIONS,
  //       });

  //       cache.writeQuery({
  //         query: QUERY_MEDICATIONS,
  //         data: { medications: [removeMedication, ...medications] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  // const deleteMed = async ({ medicationId }) => {
  //   try {
  //     const { data } = await removeMedication({
  //       variables: {
  //         _id: medicationId,
  //       },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  //Referenced https://iamrohit.in/css-notebook-paper-design/
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
            {medications
              .filter((medication) => medication.allergic)
              .map((medication) => (
                <div className="note-lines" key={medication._id}>
                  <div className="line">
                    <p> 💊 {medication.medName} </p>
                  </div>
                  <div className="line">
                    <p>
                      {" "}
                      -- Reaction: {medication.reaction}
                      <span
                        className="emoji "
                        role="img"
                        aria-label="trash"
                        aria-hidden="false"
                        align="left"
                        // onClick={() => deleteMed(medication._id)}
                      >
                        🗑️
                      </span>{" "}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistrxnList;
