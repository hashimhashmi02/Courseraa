const { Router } = require("express");
const adminRouter = Router();
const {adminModel} = require("../db")

// adminRouter.use(adminMiddleware);

adminRouter.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    

    res.json({
        message : "Signup completed"
    })
})


adminRouter.post("/signin",function(req,res){
    res.json({
        message : "Signin completed"
    })
})


adminRouter.post("/",function(req,res){
    res.json({
        message : "Signin completed"
    })
})

adminRouter.put("/",function(req,res){
    res.json({
        message : "Signin completed"
    })
})



adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message : "Signin completed"
    })
})



// adminRouter.use(adminMiddleware);


module.exports={
    adminRouter:adminRouter
}

