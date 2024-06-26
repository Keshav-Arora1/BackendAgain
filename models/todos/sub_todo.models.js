import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content: {
        type:String,
        required: true
    },
    complete: {
        type: Boolean,
<<<<<<< HEAD
        default: false 
=======
        default: false
>>>>>>> origin/codespace-musical-space-couscous-wrrvxj476wg43vv9x
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps:true})

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)