const express = require("express");
const router = express.Router();

// Connecting item model
const Item = require("../../models/Item");

// Getting all the items and sorting by date e.g. latest first
router.get("/", (req, res) => {
    Item.find().sort({date: -1}).then(items => res.json(items));
});

// Creating Item
router.post("/", (req, res) => {
    const newItem = Item({
        name: req.body.name
});

newItem.save().then(item => res.json(item));

});

// Deleting an item
router.delete("/:id", (req, res) =>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(400).json({success: false}));
});


module.exports = router;