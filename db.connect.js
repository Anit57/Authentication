import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rajbhandarianit7:YoungIn@yntask.hyc7c2y.mongodb.net/AuthenticationData?retryWrites=true&w=majority"
    );
    console.log("DB connection: OK");
  } catch (error) {
    console.log("DB connection :Failed");
    console.log(error.message);
  }
};
