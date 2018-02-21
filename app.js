let express = require ('express');
let app = express('view engine', 'ejs');
let todoController = require('./controllers/todoController');

app.set('/assets', express);
app.use(express.static('./public'));

todoController(app);

app.listen(3000);
console.log('You are listening port 3000');