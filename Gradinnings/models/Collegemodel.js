const mongoose = require("mongoose");

// const Highlight = require('../models/CollegeModel/Highlights')
// const Courses = require('../models/CollegeModel/Courses')
// const Admission = require('../models/CollegeModel/Admission')
// const Cutoff = require('../models/CollegeModel/Cutoff')
// const Placement = require('../models/CollegeModel/Placement')
// const Scholarship = require('../models/CollegeModel/Scholarship')
// const Campus = require('../models/CollegeModel/Campus')
// const Award = require('../models/CollegeModel/Awards')
// const Awards = require('../models/CollegeModel/Awards')
// const Seat = require('../models/CollegeModel/Seat')
// const Eligibility = require('../models/CollegeModel/Eligibility')
const HighlightSchema = new mongoose.Schema({
  overview: {
    type: String,
  },
  tables: {
    type: [[String]],
  },
});

const CourseSchema = new mongoose.Schema({
  overview: {
    type: String,
  },
  tables: [
    {
      type: Array,
    },
  ],
});

const AdmissionSchema = new mongoose.Schema({
  overview: {
    type: String,
  },
  tables: [
    {
      type: Array,
    },
  ],
});

const CutoffSchema = new mongoose.Schema({
  overview: {
    type: String,
  },
  tables: [
    {
      type: Array,
    },
  ],
});

const PlacementSchema = new mongoose.Schema({
  overview: {
    type: String,
  },
  tables: [
    {
      type: Array,
    },
  ],
});

const ScholarshipSchema = new mongoose.Schema({
  overview: {
    type: String,
  },
  tables: [
    {
      type: Array,
    },
  ],
});

const CampusSchema = new mongoose.Schema({
  overview: {
    type: String,
  },
  tables: [
    {
      type: Array,
    },
  ],
});

const AwardsSchema = new mongoose.Schema({
  overview: {
    type: String,
  },
  tables: [
    {
      type: Array,
    },
  ],
});

const SeatSchema = new mongoose.Schema({
  overview: {
    type: String,
  },
  tables: [
    {
      type: Array,
    },
  ],
});

const EligibilitySchema = new mongoose.Schema({
  overview: {
    type: String,
  },
  tables: {
    type: [[String]],
  },
});

const Collegeschema = new mongoose.Schema({
  name: {
    type: String,
  },
  overview: {
    type: Object,
  },
  coursesarray: {
    type: Array,
  },
  city: {
    type: String,
  },
  Highlight: [HighlightSchema],
  Courses: [CourseSchema],
  Admission: [AdmissionSchema],
  Cutoff: [CutoffSchema],
  Placement: [PlacementSchema],
  Scholarship: [ScholarshipSchema],
  Campus: [CampusSchema],
  Award: [AwardsSchema],
  Seat: [SeatSchema],
  Eligibility: [EligibilitySchema],
});

const College = mongoose.model("College", Collegeschema);
module.exports = College;
