let express = require ('express');
let app = express('view engine', 'ejs');

app.set('/assets', express);
app.use(express.static('./public'));

app.listen(3000);
console.log('You are listening port 3000');