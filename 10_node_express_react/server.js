const express = require('express')
const app = express()

app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1,
            username: 'igor'
        },
        {
            id: 2,
            username: 'steve'
        }
    ])

})

app.get('/api/cars', (req, res) => {
    res.json([
        {
            id: 1,
            brand: 'renault'
        },
        {
            id: 2,
            username: 'ford'
        }
    ])
    
})

const port = process.env.PORT || 3001

app.listen(port)