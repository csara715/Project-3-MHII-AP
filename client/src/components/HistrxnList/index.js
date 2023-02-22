import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MEDICATIONS } from "../../utils/queries";
import { REMOVE_MEDICATION } from "../../utils/mutations";

const styles = {
  btn: {
    textAlign: "right",
  },
  button: {
    background: "skyblue",
    color: "blue",
  },
};

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
      <div className="notebody">
        <div className="notepad">
          <div className="top">
            <div class="spiral-part">
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
              <div class="spiral">
                <div class="hole"></div>
                <div class="wire"></div>
              </div>
            </div>
          </div>
          <div className="paper">
            <h5>Current list of allergies: </h5>
            <br />
            {medications
              .filter((medication) => medication.allergic)
              .map((medication) => (
                <p key={medication._id}>
                  💊 {medication.medName} <br />
                  Reaction: {medication.reaction}
                  <p style={styles.btn}>
                    <button
                      className="btn btn-sm m-2"
                      style={styles.button}
                      onClick={() => deleteMed({ _id: medication.id })}
                    >
                      {"   "}
                      Delete 🗑️{"   "}
                    </button>
                    <button
                      className="btn btn-sm m-2"
                      style={styles.button}
                      onClick={() => deleteMed({ _id: medication.id })}
                    >
                      {"   "}
                      Update ⬆️{"   "}
                    </button>
                  </p>
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HistrxnList;
