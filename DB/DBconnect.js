import chalk from "chalk";
import mongoose from "mongoose";

const DBConnection = () => {
  mongoose
    .connect(
      `mongodb://shehryar:shehryar@cluster0-shard-00-00.ugo70.mongodb.net:27017,cluster0-shard-00-01.ugo70.mongodb.net:27017,cluster0-shard-00-02.ugo70.mongodb.net:27017/Students?replicaSet=atlas-l7f15u-shard-0&ssl=true&authSource=admin`
    )
    .then(() => {
      console.log(chalk.green('DB Connected Successfully'));
    })
    .catch((err) => {
      console.log(chalk.red('DB Connection Error: ', err));
    });

  mongoose.connection.on('error', (err) => {
    console.log(chalk.red('MongoDB Connection Error: ', err));
  });

  mongoose.connection.once('open', () => {
    console.log(chalk.blue('MongoDB Connection Opened'));
  });
};

export default DBConnection
  
