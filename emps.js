const request = require('request')

function getEmps () {
    return request.get('https://jsonplaceholder.typicode.com/posts', (err, res, body) => body.data)
}

module.exports = getEmps;