const mongoose = require('mongoose')


async function connect() {
try{
    await mongoose.connect('mongodb+srv://krishnabansal89:Extra123@cluster0.pr2fblg.mongodb.net/test?retryWrites=true&w=majority')
    console.log('db is connected')
}
catch{
    console.log('error ouccured')
}
}

module.exports = connect