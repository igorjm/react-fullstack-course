const bcrypt = require('bcrypt')
const {MD5} = require('crypto-js')
const jwt = require('jsonwebtoken')

// bcrypt.genSalt(10, (err, salt) => {
//     if(err) return next(err)

//     bcrypt.hash('password123', salt, (err, hash) => {
//         if(err) return next(err)
//         console.log()
//     })
// })

// const secret = 'MYSECRETPASSWORD'
// const secretSalt = 'IDIDDIIDOSDJSJDJJJJDS'

// const user = {
//     id: 1,
//     token: MD5('password').toString() + secretSalt
// }

// const receivedToken = 'token'
// if(receivedToken === user.token) {
//     console.log('OUT')
// }

// console.log(user)

const token = jwt.sign()
const decodeToken = jwt.verify()