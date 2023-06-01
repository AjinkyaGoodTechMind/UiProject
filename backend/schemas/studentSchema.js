const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  name: { type: Schema.Types.String },
  email: { type: Schema.Types.String },
  contactNumber: { type: Schema.Types.Number },
  profilePic: { type: Schema.Types.String },
  age: { type: Schema.Types.String },
  gender: { type: Schema.Types.String },
  class: { type: Schema.Types.String },
  grade: { type: Schema.Types.String },
  marks: { type: Schema.Types.String },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
