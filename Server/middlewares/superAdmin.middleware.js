import User from "../model/user.model.js"

export const superAdminMiddleware = async (req,res,next) =>{
    try {
        console.log("ID",req.userID)
        const user = await User.findById(req.userID)
        console.log('WEEEE',user)
        if (user.role == 'super admin'){
            next()
        }
        else {
            throw new Error('Forbidden')
        }
    } catch (error) {
        console.log(error)
        return res.status(403).send({message:'Forbidden Action!'})
        
    }
}