let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost/todo');

const todoSchema = mongoose.Schema({ item: String });
const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    db:db,
    todo: Todo
}
