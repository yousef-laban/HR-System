const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  DateOfBirth: {
    type: Date,
    required: true,
  },

  birthPlace: {
    type: String,
    required: true,
  },

  hiringDate: {
    type: Date,
    required: true,
  },

  salary: {
    type: Number,
    required: true,
  },

  bankIBAN: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  slug: { type: String, slug: "name", unique: true },

  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },

  divisionId: {
    type: Schema.Types.ObjectId,
    ref: "Division",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // toJSON: { virutuals: true },
  // toObject: { virutuals: true },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
