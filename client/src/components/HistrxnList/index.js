import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MEDICATIONS } from "../../utils/queries";
import { REMOVE_MEDICATION } from "../../utils/mutations";
// import "../../list.css";

const HistrxnList = (props) => {
  const { data } = useQuery(QUERY_MEDICATIONS);

  const [removeMedication] = useMutation(REMOVE_MEDICATION);
  let medications = [];

  const deleteMed = (medicationId) => {
    removeMedication({
      variables: {
        _id: medicationId,
      },
    });
  };

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
    <>
      <div className="notepad">
        <div className="top"></div>
        <div className="paper">
          <h5>Current list of allergies: </h5>
          <br />
          {medications
            .filter((medication) => medication.allergic)
            .map((medication) => (
              <p key={medication._id}>
                💊 {medication.medName} <br />
                Reaction: {medication.reaction}
                <button
                  className="emoji "
                  role="img"
                  aria-label="trash"
                  aria-hidden="false"
                  align="right"
                  onClick={() => deleteMed(medication._id)}
                >
                  🗑️
                </button>
                <br />
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

export default HistrxnList;
