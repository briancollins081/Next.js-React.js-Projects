import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  return await MongoClient.connect(
    `mongodb+srv://andere:hqxDNGbBGr2KNW2N@cluster0.l4l3f.mongodb.net/authenticationdb?retryWrites=true&w=majority`
  );
};


