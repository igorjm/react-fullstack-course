const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017/test'

/**CONNECTING TO DB */

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log('could not connect')
//     } else {
//         return console.log('connected')
//     }
//     db.close()
// })

/**INSERTING DATA IN DB */

// MongoClient.connect(url, (err, db) => {

//     const cars = [
//         {model: "Sandero", year: "2015"},
//         {model: "Tucson", year: "2014"}
//     ]

//     //insertMany: only using array of objects
//     db.collection('Cars').insertMany(cars, (err, res) => {
//         if(err) {
//             return console.log(`cannot insert: ${err}`)
//         }
//         console.log(res.ops)
//     })

    //insert: many or single object can be saved
    // db.collection('Cars').insert(cars, (err, res) => {
    //     if(err) {
    //         return console.log(`cannot insert: ${err}`)
    //     }
    //     console.log(res.ops)
    // })

    // db.collection('Cars').insertOne({
    //     model: 'Ford',
    //     year: 2019
    // }, (err, res) => {
    //     if (err) {
    //         return console.log(`cannot insert: ${err}`)
    //     } else {
    //         return console.log(res.ops)
    //     }
    // })

//     db.close()
// })

/**GETTING DATA FROM DB */

// MongoClient.connect(url, (err, db) => {
//    db.collection('Cars')
//    //find(): get all data
//    .find()
//    //find(obj): brings all data that contains the 'obj' : WHERE
//    //.find({year:'2000'})
//    //skip(1): skip the first data and bring all the rest
//    .skip(1)
//    //limit(1): limit the number of data returned
//    .limit(1)
//    //sort(object): ordering the result by the objetct
//    .sort({"_id": -1})
//    .toArray()
//    .then(data => {
//        console.log(data)
//    })
//    db.close()
// })

/**DELETING DATA FROM DB */

// MongoClient.connect(url, (err, db) => {   
//     //deleteMany(obj): deleting all data with the obj
//     //deleteOne(obj): find first one data with the obj and delete
//     //findOneAndDelete(obj): find one data with the obj and delete
//     db.collection('Cars').deleteMany({year: '2000'}, (err, doc) => {
//         console.log(doc)
//     })
//     db.close()
// })

/**UPDATING DATA */

MongoClient.connect(url, (err, db) => [
    db.collection('Cars').findOneAndUpdate(
        {
            name: 'Igor'
        },
        {
            $set: {
                lastname: "Jose Melo"
            },
            $inc: {
                age: +1
            }
        },
        {
            //upsert:true - If dont find the record, it create a new one
            upsert:true,
            //returnOriginal: false - Show in console the OLD result
            returnOriginal: false
        },
        (err, doc) => {
            console.log(doc)
        }
    )
])