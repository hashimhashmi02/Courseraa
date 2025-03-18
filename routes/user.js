const { Router } = require("express");
const userRouter = Router();



userRouter.post("/signup",function(req,res){
    const {email,password,firstName,lastName} = req.body;
    

    res.json({
        message : "Signup completed"
    })
})


userRouter.post("/signin",function(req,res){
    res.json({
        message : "Signin completed"
    })
})

userRouter.get("/purchases",function(req,res){
    res.json({
        message : "Signin co"
    })
})


module.exports ={
    userRouter  :userRouter
}