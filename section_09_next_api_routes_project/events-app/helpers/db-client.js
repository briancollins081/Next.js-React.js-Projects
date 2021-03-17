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
  return { client, db };
};

export const insertDocument = async (db, collection, document) => {
  const result = await db.collection(collection).insertOne(document);
  return result;
};
export const findDocument = async (db, collection, filter) => {
  const result = await db.collection(collection).findOne(filter);
  return result;
};
export const findDocuments = async (db, collection, filter, sort) => {
  const result = await db
    .collection(collection)
    .find(filter)
    .sort({ _id: sort })
    .toArray();
  return result;
};
