let express = require ('express');
var bodyParser = require('body-parser');
let todoController = require('./controllers/todoController');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));

todoController(app);

app.listen(3000);
console.log('You are listening port 3000');  