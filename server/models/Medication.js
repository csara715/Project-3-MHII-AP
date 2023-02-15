const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const medicationSchema = new Schema({
  medName: {
    type: String,
    required: "Medication must have a name",
    trim: true,
  },
  strength: {
    type: String,
  },
  direction: {
    type: String,
  },
  prescriber: {
    type: String,
  },
  allergic: {
    type: Boolean,
    required: true,
  },
  reaction: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Medication = model("Medication", medicationSchema);
module.exports = Medication;
