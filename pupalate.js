require('dotenv').config()
const data = require('./MOCK_DATA.json')

const Job = require('./models/Job')
const connectDB = require('./db/connect')


const start = async ()=>{
    try { 
        await connectDB(process.env.MONGO_URI)
        await Job.deleteMany()
        await Job.create(data)
    } catch (error) {
        
    }
}

start()