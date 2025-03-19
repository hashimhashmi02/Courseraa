const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const courseRouter = Router();



courseRouter.post("/purchase", userMiddleware, async function(req,res){
    

    res.json({
        message : "Signin co"
    })
})

courseRouter.get("/preview",function(req,res){
    res.json({
        message : "Signin co"
    })
})


module.exports={
    courseRouter:courseRouter
}