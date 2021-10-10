const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const DivisionSchema = new Schema({
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

  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "Department",
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

const Division = mongoose.model("Division", DivisionSchema);

module.exports = Division;
