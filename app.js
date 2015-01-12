var express = require('express'),
    app = express(),
    path = require('path'),
    cons = require('consolidate');

app.set('port', 8051);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'dust');
app.engine('dust', cons.dust);

app.use(express.static(path.join(__dirname, './public')));

app.use('/', function (req, res) {
    res.render("index")
});

app.listen(app.get('port'), function () {
    console.log("app not listen to prot", app.get("port"));
})
