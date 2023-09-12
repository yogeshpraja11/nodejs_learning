const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: {
    product: { type: Object, required: true },
    quantity: { type: Object, required: true },
  },
  user: {
    name: { type: String, required: true },
    userId: { type: Schema.Types.ObjectID, required: true, ref: "User" },
  },
});

module.exports = mongoose.model("Order", orderShema);
