
// In a more realistic example, this data would be in a database
const fruitData = [
	{ name: 'apple', price: 20, id: 1 },
	{ name: 'banana', price: 35, id: 2 }
]

const allProductsRoute = (req, res) => {
	res.send(fruitData)
	// Express automatically converts JS objects and arrays to JSON strings
	// Only strings are ever sent over the internet
}

// URL in app.get must be: /fruits/:index
const specificProductRoute = (req, res) => {
	// We must validate the input
	// The user/frontend can't be trusted!
	const index = Number(req.params.index)
	console.log('GET request to /fruits/:index, index=' + index)
	
	// index can be: a valid number (index within the array), an invalid number (outside the array), not a number (NaN)
	if( isNaN(index) ) {
		console.log('- index is not a number at all')
		// Tell the client that this was a BAD REQUEST
		res.sendStatus(400)
		return
	}
	// Task: check if index is within or outside the array
	// else if( ??? )

	const fruit = fruitData[index]
	console.log('- we found this fruit: ', fruit)
	res.send(fruit)
}

/*
JS data types: string, number, boolean, null, undefined, BigInt, Symbol, object
Each data type has a constructor function that can be used to convert between types:
let string = String(123)
let mystery = '10' + 1  // automatic type conversion
*/

module.exports = { allProductsRoute, specificProductRoute }
