import mongoose from "mongoose";

const TodosSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
})

const Todo = mongoose.models.todos || mongoose.model("todos", TodosSchema)

export default Todo