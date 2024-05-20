const UserService = require('../services/User-service')

const userService = new UserService()

const create = async(req,res)=>{
    try {
        
        const user = await userService.create({
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            data: user,
            success: true, 
            message: 'successfully registered',
            error: {}
        })
    } catch (error) {
        console.log('something went wrong in service layer')
       return res.status(500).json({
            data: {},
            success: false, 
            message: 'faild to register user',
            error: error
        })
    }
}

const signIn = async(req,res)=>{
    try {
        const user = await userService.signIn(req.body.email, req.body.password)
        return res.status(200).json({
            data: user,
            success: true,
            message: 'Successfully signup the user'
        })
    } catch (error) {
        console.log('something went wrong in service layer')
        return res.status(500).json({
            data: {},
            success: false, 
            message: 'User not found',
            error: error
        })
    }
}
module.exports = {
    create,
    signIn
}