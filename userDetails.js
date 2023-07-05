const mongoose=require("mongoose");

const UserDetailsSchema= new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        email: { type: String, unique: true },
        password: String,
    },
    {
    collection: "UserInfo", 
    }
    );

    mongoose.model("UserInfo",UserDetailsSchema);