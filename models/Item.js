const mongoose = require("mongoose");// DB connection
const Schema = mongoose.Schema;// to create db schema

// creating item schema 
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model("item", ItemSchema);