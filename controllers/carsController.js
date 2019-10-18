const express = require('express');
const router  = express.Router();
const Fruit = require('../models/cars.js');


router.get('/new', (req, res) => {

    res.render('new.ejs')
})


// router.post('/cars', (req, res) => {
//     res.send('hi');
// });

// router.get('/cars', (req, res) => {

// router.get('/cars', (req, res) => {
//       res.render('index.ejs', {
//         idCars: Car //indexRouteSports    

//     });
// });

router.get('/cars/:index', (req, res) => {
    res.send(cars[req.params.index]);
});



// router.post('/', (req, res) => {
//     // our routes are the final destination
//     console.log(req.body, ' this should be the contents of the form')

//     if(req.body.fourByFour === 'on'){
//         // we do this to make it look like the
//         // data in our model "sanitizing our data"
//         req.body.fourByFour = true;
//     } else {
//         req.body.fourByFour = false;
//     } 
// })




module.exports = router;