const express = require('express')
const app = express()
const querystring = require('querystring')

app.get('/', (req, res) => {
    res.send(`html`)
})

app.get('/api/user', (req, res) => {
    res.send({
        name: 'Igor',
        car:["Renault"]
    })
})

app.get('/api/user/:id', (req,res) => {
    let id = req.params.id
    res.send(`html ${id}`)
})

app.get('/api/car', (req,res) => {
    let brand = req.query.brand
    let year = req.query.year

    res.send({
        brand,
        year
    })
})

const port = process.env.PORT || 3000

app.listen(port)