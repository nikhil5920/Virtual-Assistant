import jwt from "jsonwebtoken"

const generateToken = (userId) => {
    try {
        const token = jwt.sign({ userId }, process.env.jSON_SECRET, { expiresIn: '7d' })
        return token;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default generateToken;