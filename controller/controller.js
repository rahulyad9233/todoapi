const Todo=require('./models/todo.js');

const getTodos = async (req,res) => {
    try{
        const todos = await Todo.find();
        return res.status(200).json(todos);
    }catch(err){
        return res.status(500).json(err);
    }
}

const getTodoById = async (req, res) => {
    try{
        const Id = req.params.id;
        const todo = await Todo.findById(Id);
        return res.status(200).json(todo);
    }catch(err){
        return res.status(404).json(err);
    }
}

const createTodo = async (req, res) => {
    try{
        const todo = new Todo(req.body);
        await todo.save();
        return res.status(201).json(todo)
    }catch(err){
        return res.status(400).json(err);
    }
}

const updateTodo = async (req, res) => {
    try{
        const Id = req.params.id;
        const todo = await Todo.findByIdAndUpdate(Id, req.body, {new:true});
        return res.status(200).json(todo);
    }catch(err){
        return res.status(404).json(err);
    }
}

const deleteTodo = async (req, res) => {
    try{
        const Id = req.params.id;
        await Todo.findByIdAndDelete(Id);
        return res.status(200).json({ message: 'Todo deleted successfully' });
    }catch(err){
        return res.status(404).json(err);
    }
}

module.exports={
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};