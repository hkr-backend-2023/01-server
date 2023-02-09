// If you want to use the more modern "import" syntax, remember to add "type": "module" to package.json
const express = require('express')

const app = express()


let visitCount = 0

app.get('/', (req, res) => {
	console.log('GET request for / ')
	visitCount++
	// Three methods of using strings in JavaScript: '', "", ``
	res.send(`Hello! This is the ${visitCount} time you have visited.`)
})



app.listen(3000, () => {
	console.log('Server is listening on port 3000...')
})
