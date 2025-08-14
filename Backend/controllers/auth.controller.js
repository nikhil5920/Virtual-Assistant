import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../config/token.js"

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        if(password.length < 6) {
            return res.status(201).json({
                message: "Password must be between 6 and 20 characters"
            })
        }

        // bcrypting the password 
        const hashPassword = await bcrypt.hash(password, 10);    
        
        // Create a new user
        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
        });
        
        // generating token for the user
        const token = await generateToken(newUser._id);

        res.cookie("token", token, {
        httpOnly: true,
        macAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite:"strict",
        secure: false, // Set to true if using HTTPS
        });

        return res.status(201).json(newUser);

    } catch (error) {
        console.error("Error during sign up:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

export default signUp;

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User Email is not exists"
            });
        }

        const isMatchPassword = await bcrypt.compare(password, user.password);
        if(!isMatchPassword){
            return res.status(400).json({message: "Please fill the correct password"})
        }

        // generating token for the user
        const token = await generateToken(newUser._id);

        res.cookie("token", token, {
        httpOnly: true,
        macAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite:"strict",
        secure: false, // Set to true if using HTTPS
        });

        return res.status(200).json(user);

    } catch (error) {
        console.error("Error during signin:", error);
        return res.status(500).json({
            message: "Internal server error : ${error}"
        });
    }

};

export const signOut = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: " session was Logged Out" }); 
    } catch (error) {
        return res.status(500).json({ message: ` In Logged Out : ${error}` })        
    }
}

