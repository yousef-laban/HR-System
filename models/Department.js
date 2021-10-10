const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  code: {
    type: Number,
    required: true,
    unique: true,
  },

  slug: { type: String, slug: "name", unique: true },

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

const Department = mongoose.model("Department", DepartmentSchema);

module.exports = Department;
