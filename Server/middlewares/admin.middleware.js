import User from "../model/user.model.js"

export const adminMiddleware = (req,res,next) =>{
    try {
        const user = User.findById(req.userID)
        if (user.role == 'admin') {
            next()
        } else{
            throw new Error('Forbidden')
        }
    } catch (error) {
        next(error)
        console.log(error)
        return res.status(403).send({message:"Forbidden User"})
        
    }

}