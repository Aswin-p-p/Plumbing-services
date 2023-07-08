const express = require("express");
const regModel = require("../model/regModel");
const RegRouter = express.Router()


RegRouter.post('/singup',async(req,res)=>{
 try {
    const {name,email,number,password} = req.body
    const user = await regModel.create({name,email,number,password})
    if(user){
        return res.status(200).json({
            success : true ,
            error : false,
            message : "registration complaeted"
        })
    }
 } catch (error) {
    console.log(error);
 }

})

//=============Login-------------------

RegRouter.post('/login',async(req,res)=>{
  try {
    const {email,password} = req.body
    const user = await regModel.findOne({email})
  if(!user){
    return res.status(400).json({
        success : false,
        error : true ,
        message : "email not matching"
    })

  }
  if(user.password==password){
    return res.status(400).json({
        success : false,
        error : true ,
        message :'password not matching'
    })
  }
   return res.status(200).json({
    success : true,
    error : false ,
    message :'successfuly logined'
   })



  } catch (error) {
    return res.status(400).json({
        success : false,
        error : true ,
        message :'somethinwent wrong'
    })
  }
})

//--------------------view................
RegRouter.post('/view',async(req,res)=>{
  try {
    const {name,email,number,password} = req.body
    const user = await regModel.find()
  return res.status(200).json({
    success : true,
    error : false,
    data : user
  })
  } catch (error) {
    console.log(error);
  }

})

//---------------single-view--------------
RegRouter.post('/single/:id',async(req,res)=>{

try {
    const id = req.params.id
    const user = await regModel.findOne({_id:id})
    return res.status(200).json({
        success : true,
        error : false,
        data : user
    })
} catch (error) {
    console.log(error);
}
})
//-------------------update------------------
RegRouter.post('/update/:id',async(req,res)=>{
    const data = {
        name : req.body.name,
        email : req.body.email,
        number : req.body.number,
        password : req.body.password

    }
    
    try {
        const id = req.params.id
        const user = await regModel.updateOne({_id:id},{$set:data})
        return res.status(200).json({
            success : true,
            error : false,
            data : user
        })
    } catch (error) {
        console.log(error);
    }
})

//--------------------delete------------------

RegRouter.post('/delete/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const user = await regModel.deleteOne({_id:id})
        return res.status(200).json({
            success : true,
            error : false,
            data : user
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports= RegRouter


