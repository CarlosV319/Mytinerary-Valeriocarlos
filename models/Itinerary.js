const mongoose = require("mongoose");

const itinerariesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  personImage: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  hashtags: { type: String },
  CityID: [{ type: mongoose.Types.ObjectId, ref: "city", required: true }],
  likes: Number,
  comment: String,
});

const itinerary = mongoose.model("itinerary", itinerariesSchema);
module.exports = itinerary;
