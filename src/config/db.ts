import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('Database connected!');
  } catch (error) {
    console.error(error.message);
    //Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
