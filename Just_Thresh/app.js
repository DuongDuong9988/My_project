const express = require('express');
const path = require("path");
const app = express();

// for body parser . to colect data that sebt from the client
app.use(express.urlencoded({ extended: false }))

// serve static file. css , js, 
app.use(express.static(path.join(__dirname, 'public')));

// serve static file image , video ..
app.use(express.static(path.join(__dirname, 'uploads')));

// Temple engine  PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// send data infomation acc lol..................
app.post("/data_acc.pug", function(req, res ){
    res.render('data_acc');
});
//...............................................

// Test serve
app.get('/', function(req, res) {
    res.render('index')
});
app.get("/skin_normal" , function(req , res){
    res.render('skin_normal');
});
// Routers
app.get("/acc_lien_minh", function(req, res ){
    res.render('show_info_acc');
})

// Eroor > page noy found 404
app.use((req, res, next) => {
        var err = new Error('Page not found');
        err.status = 404;
        next(err);
    })
    // handling errors (send them to client)
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000...")
});
module.exports = app;