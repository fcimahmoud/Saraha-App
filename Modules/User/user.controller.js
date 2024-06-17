
import { userModel } from "../../DB/Models/user.model.js";

export const addUser = async (req , res) => {
    try {
        const {name , email , password , gender} = req.body;
        const existEmail = await userModel.findOne({email});
        if (existEmail){
            return res.status(409).json({ message: 'Email already exists' });
        }

        const newUser = new userModel({name , email , password , gender})
        await newUser.save();
        res.status(201).json({ User: newUser});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const foundUser = await userModel.findById(req.params.id);
        if(!foundUser) {
            res.status(400).json({message: "User Not Found!"});
        }

        res.status(201).json(foundUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.status(201).json(allUsers);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}