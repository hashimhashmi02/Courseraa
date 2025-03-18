const { Router } = require("express");
const courseRouter = Router();



courseRouter.post("/purchase",function(req,res){
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