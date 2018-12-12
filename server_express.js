const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(``)
})

app.get('/api/user', (req, res) => {
    res.send({
        name: 'Igor',
        car:["Renault"]
    })
})

app.listen(3000)