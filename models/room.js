const mongoose = require("mongoose");

const roomModel = mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true,
      unique: true
    },
    roomCapacity: {
      type: Number,
    },
    level: {
      type: Number,
    },
    schedule: {
      type: [{ type: mongoose.Types.ObjectId, ref: "schedule" }],
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("room", roomModel)