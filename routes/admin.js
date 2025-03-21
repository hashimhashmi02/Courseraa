const { Router } = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db")
const jwt = require("jsonwebtoken");

const {JWT_ADMIN_PASSWORD}= require("../config");
const { adminMiddleware } = require("../middleware/admin");




adminRouter.post("/signup",async function(req,res){
    const {email,password,firstName,lastName} = req.body;


    await adminModel.create({
         email:email,
         password:password,
         firstName:firstName,
         lastName:lastName
     })
 
     res.json({
         message : "Signup succeeded"
     })
 })
 

adminRouter.post("/signin",async function(req,res){
    const {email,password} = req.body;

    const admin = await adminModel.findOne({
        email:email,
        password:password
    });
    
    if(admin){
       const token = jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD)
    
        res.json({
            token:token
        })
    } else {
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
    
    }) 


adminRouter.post("/course", adminMiddleware, async function(req,res){
    const adminId = req.userId;

const {title,description,imageUrl,price}= req.body;

 const course=  await courseModel.create({
    title,description,imageUrl,price, creatorId,adminId
})

    res.json({
        message : "Course Created",
        courseId:course._Id
    })
})




adminRouter.put("/course", adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const {title,description,imageUrl,price,courseId}= req.body;
    
     const course=  await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
     },
        {
        title,description,imageUrl,price, creatorId,
    })
    
        res.json({
            message : "Course Created",
            courseId:course._Id
        })
    })
    



adminRouter.get("/course/bulk", adminMiddleware,  async function(req,res){
    const adminId = req.userId;

    const {title,description,imageUrl,price,courseId}= req.body;
    
     const course=  await courseModel.find({

        creatorId:adminId
     },
        {
        title,description,imageUrl,price, creatorId,
    })
    
        res.json({
            message : "Course Created",
            courseId
        })
    })

module.exports={
    adminRouter:adminRouter
}

