let express = require('express');
let bodyParser = require('body-parser');

let data = ['sport', 'literature', 'chess'];

let app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
//     res.send('this is home page');
// });

app.get('/', function(req, res){
    //res.send('You requested profile with id: ' + req.params.id);
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.post('/contact', urlencodedParser, function(req, res){    
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
    //res.send('You requested profile with id: ' + req.params.id);
    res.render('profile',{person: req.params.name, hobbies: data })
});

app.listen('3000');