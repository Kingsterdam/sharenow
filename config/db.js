require('dotenv').config();
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

    const db = process.env.MONGO_CONNECTION_URL;
    
    const connectDB = async () => {
      try {
        console.log(db);
        await mongoose.connect(`${db}`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
      } catch (error) {
        console.log(error.message);
        process.exit(1);
      }
    };


module.exports = connectDB;