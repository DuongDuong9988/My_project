const express = require("express");
const router = express.Router();

// get index pape

router.get('/', (req ,res , next)=>{
    res.render('index');
});
// get sign .................................
router.get('/sign_up', function(req ,res ){
    res.render('sign_up');
});
router.get('/sign_in', function(req ,res ){
    res.render('sign_in');
});

//.. gui data login , 
router.post('/login', (req ,res , next)=>{
    res.json(req.body);
});

// .. gui data register data
router.post('/register', (req ,res , next)=>{
    res.json(req.body);
});
//......................................
module.exports = router;