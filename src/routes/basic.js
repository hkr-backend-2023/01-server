// Basic routes
const path = require('path')

let visitCount = 0

const staticPath = path.join(__dirname, '../public')
// Static files == files that are not dynamically generated (HTML, CSS, JS)

const indexRoute = (req, res) => {
	console.log('GET request for / (index.html)')
	res.sendFile('index.html', { root: staticPath })
	// we will be using middleware to do this for all staic files (files in the 'public' folder)
}

const helloRoute = (req, res) => {
	console.log('GET request for /hello ')
	visitCount++
	// Three methods of using strings in JavaScript: '', "", ``
	res.send(`Hello! This is the ${visitCount} time you have visited.`)
}

module.exports = { indexRoute, helloRoute }
// export { indexRoute }

