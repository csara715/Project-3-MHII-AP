import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MEDICATIONS } from "../../utils/queries";
import { REMOVE_MEDICATION } from "../../utils/mutations";

const styles = {
  btn: {
    textAlign: "right",
    listStyleType: "none",
  },
  button: {
    background: "skyblue",
    color: "blue",
  },
};

const HistrxnList = (props) => {
  const { data } = useQuery(QUERY_MEDICATIONS);

  // const [removeMedication] = useMutation(REMOVE_MEDICATION);
  const [removeMedication] = useMutation(REMOVE_MEDICATION, {
    update(cache, { data: { removeMedication } }) {
      try {
        const { medications } = cache.readQuery({
          query: QUERY_MEDICATIONS,
        });
        cache.writeQuery({
          query: QUERY_MEDICATIONS,
          data: { medications: [removeMedication, ...medications] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  let medications = [];

  // const deleteMed = ({ _id }) => {
  //   removeMedication({
  //     variables: {
  //       _id: _id,
  //     },
  //   });
  // };

  const deleteMed = async ({ _id }) => {
    try {
      const { data } = await removeMedication({
        variables: {
          _id: _id,
        },
      });
      window.location.assign("/allergies");
    } catch (err) {
      console.error(err);
    }
  };

  if (data) {
    medications = data.medications;
  } else {
    return <h3>Yay! No allergies!</h3>;
  }

  //Referenced https://iamrohit.in/css-notebook-paper-design/
  return (
    <>
      <div className="notebody">
        <div className="notepad">
          <div className="top">
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
                  <li style={styles.btn}>
                    <button
                      className="btn btn-sm m-2"
                      style={styles.button}
                      onClick={() => deleteMed({ _id: medication._id })}
                    >
                      {"   "}
                      Delete 🗑️{"   "}
                    </button>
                    {/* <button
                      className="btn btn-sm m-2"
                      style={styles.button}
                      onClick={() => updateMed({ _id: medication.id })}
                    >
                      {"   "}
                      Update ⬆️{"   "}
                    </button> */}
                  </li>
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HistrxnList;
