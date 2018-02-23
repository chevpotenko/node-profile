module.exports = function(app) {
   let data = [
       {
           item: "get milk"
       },
       {
            item: "walk dog"
       },
       {
            item:  "coding"
       }
    ];

    app.get('/todo', function(req, res) {      
        res.render('todo', {todos: data});
    });

    app.post('/todo', function(req, res) {
        if (req.body.item.length){
            data.push({ item: req.body.item});
        }        
        res.json(data);            
    });

    app.delete('/todo/:item', function(req, res) {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });        
        res.json(data);
    });
}