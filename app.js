let express = require ('express');
var bodyParser = require('body-parser');
let todoController = require('./controllers/todoController');
let database = require('./database/database');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));

database.db.then(
    () => {
        todoController.todoControllerDbOpen(database.todo, app);
    },
    (err) => {
        todoController.todoControllerDbClose(app);
    } 
);

app.listen(3000);
console.log('You are listening port 3000');  