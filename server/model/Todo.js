const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a To-Do schema
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
})

// Export the model
module.exports = mongoose.model("Todo", TodoSchema);
