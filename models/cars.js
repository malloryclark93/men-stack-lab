const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: { type: String, required: true},
    fourByFour: Boolean
})

const Cars = mongoose.model('cars', carsSchema)


const car = [
	{
		color: 'blue',
		bodyType: 'suv',
		year: 2001
},

	{
		color: 'green',
		bodyType: 'crossover',
		year: 2015
},


	{
		color: 'black',
		bodyType: 'truck',
		year: 2018
},

];









	





module.exports = Cars;