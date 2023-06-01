const mongoose = require("mongoose");
const { Schema } = mongoose;

const atcSchema = new Schema({
  name: { type: Schema.Types.String },
  email: { type: Schema.Types.String },
  contactNumber: { type: Schema.Types.Number },
  profilePic: { type: Schema.Types.String },
  age: { type: Schema.Types.String },
  gender: { type: Schema.Types.String },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const atc = mongoose.model("atc", atcSchema);

module.exports = atc;
