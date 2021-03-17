import { MongoClient } from "mongodb";

const URL = "mongodb://localhost:27017";
const DB_NAME = "nextjs-course";
const DB_CLIENT = new MongoClient(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const CONNECT_TO_CLIENT = async () => {
    const client = await DB_CLIENT.connect();
    const db = DB_CLIENT.db(DB_NAME);
    return {client, db}
};
