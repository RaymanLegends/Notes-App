import mongoose from "mongoose";

//first, create a schema
//second, create a model based off that schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {timestamps: true} //created at and updated at fields provided by mongo
);

const Note = mongoose.model("Note", noteSchema);

export default Note;