const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        require:[ true,"A note must have Tile"],
    },
    description: String,
    
});
const note = mongoose.model("Note", noteSchema);
module.exports = note;