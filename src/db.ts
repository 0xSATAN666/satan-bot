import mongoose from 'mongoose';
import config from './config';

export default async () => {
  
  try {

    const client = await mongoose.connect(config.mongo, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

    console.log("Connected to mongo database server");

  } catch (err) {

    console.error(err);

  }

}