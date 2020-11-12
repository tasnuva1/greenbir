const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chalk = require('chalk');

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      chalk.black.bgCyan.underline(`Mongodb Connected: ${conn.connection.host}`)
    );
  } catch (error) {
    console.error(chalk.red.underline(`Error: ${error.message}`));
    process.exit(1);
  }
};

module.exports = connectDB;
