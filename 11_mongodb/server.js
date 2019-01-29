const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017/test'

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log('could not connect')
//  } else {
//  return console.log('connected')
 //  }

//     db.close()
// })

MongoClient.connect(url, (err, db) => {

    db.collection('Cars').insertOne({
        model: 'Ford',
        year: 2019
    }, (err, res) => {
        if (err) {
            return console.log(`cannot insert: ${err}`)
        } else {
            return console.log(res)
        }
    })

    db.close()
})