import mongoose from "mongoose";
import * as env from "dotenv";
const dotenv = env.config({ path: process.cwd() + "/src/.env" }).parsed;

const connectionString: string = dotenv?.DB_CONNECTION
  ? dotenv.DB_CONNECTION
  : "";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log(`[server]: MongoDB was connected`);
  })
  .catch((error) => {
    console.log(`[Error]: ${error}`);
  });

mongoose.Promise = global.Promise;

export default mongoose;
