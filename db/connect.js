const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  const db = mongoose.connection
  db.on('open',()=>{console.log('connected to db');})
  db.on('error',()=>{console.log('can not connect to db');})
}

module.exports = connectDB
