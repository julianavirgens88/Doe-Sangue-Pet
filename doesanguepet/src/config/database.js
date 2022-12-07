const mongoose = require("mongoose")
const connect = () =>{
    return mongoose.connect(`${process.env.MONGODB_URI}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log('Database conectada com sucesso'))
      .catch(err => {
        throw err
      })
      
}

module.exports = {
    connect
}