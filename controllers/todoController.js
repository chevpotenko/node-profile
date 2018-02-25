todoControllerDbOpen = function(Todo, app) {
    app.get('/todo', function(req, res) { 
        Todo.find({}, function (err, data) {
            if (err) return console.error(err);
            res.render('todo', {todos: data});
        });     
    });

    app.post('/todo', function(req, res) {
        if (req.body.item.length){
            let item = Todo({ item: req.body.item });
            item.save(function(err, data) {
                res.json(data);
            });
        }     
    });

    app.delete('/todo/:item', function(req, res) {
        Todo.find({ item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
            res.json(data);
        });         
    });
}

todoControllerDbClose = function(app) {
    app.get('/todo', function(req, res) {
        res.render('404');        
    });
}

module.exports = {
    todoControllerDbOpen : todoControllerDbOpen,
    todoControllerDbClose : todoControllerDbClose
}