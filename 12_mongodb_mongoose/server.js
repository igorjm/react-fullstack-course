const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/mongoose')

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    available: Boolean
})

const Car = mongoose.model('Car', carSchema)


/**INSERTING DATA */
const addCar = new Car({
    brand: 'Renault',
    model: 'Sandero',
    year: 2015,
    available: true
})

addCar.save((err, doc) => {
    if(err) return console.log(err)
    console.log(doc)
})


/**FINDING DATA */
//FIND ALL
Car.find((err, doc) => {
    if(err) return console.log(err)
    console.log(doc)
})

//FIND WHERE ROW
Car.find({brand: "Renault"},(err, doc) => {
    if(err) return console.log(err)
    console.log(doc)
})

//FIND WHERE ID
Car.find({_id: "5c536d020463c420985a6269"},(err, doc) => {
    if(err) return console.log(err)
    console.log(doc)
})

//FIND BY ID
Car.findById("5c536d020463c420985a6269",(err, doc) => {
    if(err) return console.log(err)
    console.log(doc)
})


/**DELETE DATA */
//FIND ONE AND REMOVE
Car.findOneAndRemove({brand:'Ford'}, (err, doc) => {
    if(err) return console.log(err)
    console.log(doc)
})

//FIND BY ID AND REMOVE
Car.findOneAndRemove("5c536d020463c420985a6269", (err, doc) => {
    if(err) return console.log(err)
    console.log(doc)
})

//REMOVE
Car.remove({year: 2015}, (err, doc) => {
    if(err) return console.log(err)
    console.log(doc)
})


/**UPDATING DATA */
//UPDATE(obj)
Car.update(
    {_id: "5c536d020463c420985a6269"},
    {$set:{brand: "BMW"}},
    (err, doc) => {
        if(err) return console.log(err)
        console.log(doc)
    }
)

//FIND BY ID AND UPDATE
Car.findByIdAndUpdate(
    "5c536d020463c420985a6269",
    {$set: {brand: "Ferrari"}},
    {new: false},
    (err, doc) => {
        if(err) return console.log(err)
        console.log(doc)
    }
)