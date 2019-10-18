const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db'); 

app.use(bodyParser.urlencoded({extended: false})) //middleware
app.use(methodOverride('_method'))


const carsController = require('./controllers/carsController')

app.use('/cars', carsController);

















app.listen(3000, () => {
    console.log('listening');
});
