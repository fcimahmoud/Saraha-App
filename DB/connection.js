import mongoose from "mongoose";

export const connectionDB = async () => {
    return await mongoose
    .connect('mongodb://localhost:27017/sarahaApp')
    .then((res) => console.log("DB Connection Succesfully"))
    .catch((err) => console.log("DB Connection Failed" , err))
}