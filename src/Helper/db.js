import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "E_waste",

        });
        console.log("db connected");

        console.log(connection);
    } catch (error) {
        console.log("failed to connect the database");
        console.log(error);
    }
};
