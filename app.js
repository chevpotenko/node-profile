let express = require ('express');
let app = express();
let todoController = require('./controllers/todoController');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

todoController(app);

app.listen(3000);
console.log('You are listening port 3000');