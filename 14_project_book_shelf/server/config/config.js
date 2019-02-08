const config = {
    production : {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'secret_password',
        DATABASE: 'mongodb://localhost:27017/books_shelf'
    }
}

exports.get = function get(env) {
    return config[env] || config.default
}