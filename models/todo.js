const mongoose=require('mongoose');
const todoSchema=mongoose.Schema(
    {
        id: {type: Number},
        title: {type: String, required: true},
        description:{type:String},
        dueDate:{type:String},
        completed:{type:boolean,default:false},
        priority:{type:Number}
    }
)

const todoModel=mongoose.Model('Todo',todoSchema);

module.exports=todoModel;