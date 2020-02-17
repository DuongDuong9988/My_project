const express = require("express");
const path = require("path");
const pageRouter = require('./routes/papes');
const app = express();

app.use(express.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// setup file pug 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// router 
app.use('/', pageRouter);

// ..................................
// trang ko tim thay
app.use((req, res, next)=>{
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) =>{
    res.status(err.status || 500);
    res.send(err.message);
})

app.listen(3100, ()=>{
    console.log(" server ruing in port 3100 ......")
})

module.exports = app;