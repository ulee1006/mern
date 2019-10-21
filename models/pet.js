const mongoose = require("mongoose");
const PetSchema = mongoose.Schema({
    petname: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 characters or longer."]
    },
    pettype: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be 3 characters or longer."]
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minlength: [3, "description must be 3 characters or longer."]
    },
    like: {
        type:Number,
        default: 0
    }
}, {timestamp:true});

mongoose.model("Pet", PetSchema);
module.exports = PetSchema;