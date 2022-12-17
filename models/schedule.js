const mongoose = require("mongoose");

const scheduleModel = mongoose.Schema(
  {
    roomId: {
      type: mongoose.Types.ObjectId,
      ref: "room",
      required: true
    },
    classLevel: {
      type: String
    },
    roomName: {
      type: String,
    },
    day: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
    },
    codename: {
      type: String,
    },
    subjectName: {
      type: String,
    },
    startTime: {
      type: Date
    },
    endTime: {
      type: Date
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("schedule", scheduleModel)