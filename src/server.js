// If you want to use the more modern "import" syntax, remember to add "type": "module" to package.json
const express = require('express')
const { indexRoute, helloRoute } = require('./routes/basic.js')
const { allProductsRoute, specificProductRoute, deleteProductRoute } = require('./routes/fruits.js')
// Deconstructing an object: const { x, y } = object

const app = express()




app.get('/', indexRoute)

app.get('/hello', helloRoute)

app.get('/fruits', allProductsRoute)

app.get('/fruits/:index', specificProductRoute)

app.delete('/fruits/:index', deleteProductRoute)



const port = 3000
app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})
