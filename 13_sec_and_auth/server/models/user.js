const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_I = 10

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    psasword: {
        type: String,
        required: true,
        minlength: 6
    }
})

userSchema.pre('save', function(next) {
    var user = this

    if(user.isModified('password')) {
        bcrypt.genSalt(SALT_I, function(err, salt) {
            if(err) return next(err)
    
            bcrypt.hash(user.psasword, salt, function(err, hash) {
                if(err) return next(err)
                user.psasword = hash
                next()
            })
        })
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) throw callback(err)
        callback(null, isMatch)
    })

}

const User = mongoose.model('User', userSchema)

module.exports = { User }