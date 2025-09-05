import User from "../model/user.model.js"

export const adminMiddleware = async (req,res,next) =>{
    try {
       
        const user = await User.findById(req.userID)
        if (user.role == 'admin' || user.role == 'super admin') {
            next()
        } else{
            throw new Error('Forbidden Action!')
        }
    } catch (error) {
        next(error)
        console.log(error)
        return res.status(403).send({message:"Forbidden User"})
        
    }

}