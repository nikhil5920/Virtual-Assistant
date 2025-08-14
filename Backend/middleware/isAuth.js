import jwt from 'jsonwebtoken';

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(400).json({ message: "toke not found" });
        }

        const verificationToken = jwt.verify(token, process.env.jSON_SECRET);
        req.userId = verificationToken.userId;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"isAuth file Error"});
    }
}
export default isAuth;