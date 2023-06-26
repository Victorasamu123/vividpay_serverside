const mongoose  = require("mongoose");
const authModel = require("../model/auth.model");
const jwt = require('jsonwebtoken');

const signup = async(req,res)=>{
    console.log(req.body);
    const newUser = new authModel({
        Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        Email:req.body.Email,
        Phonenumber:req.body.Phonenumber,
        DOB:req.body.DOB,
        Password:req.body.Password,
        Profilepicture:req.body.Profilepicture,
        AccountNumber:req.body.AccountNumber,
        AccountBalance:req.body.AccountBalance,
        BVN:req.body.BVN
    });
    console.log(newUser);
    try {
        let verifiedUserEmail = await authModel.findOne({Email:req.body.Email});
        let verifiedUserPhonenumber = await authModel.findOne({Phonenumber:req.body.Phonenumber});
        if (verifiedUserEmail) {
            console.log(verifiedUserEmail)
            res.send({message:"email has already been used",status:false});
        }else if(verifiedUserPhonenumber) {
            res.send({message:"phonenumber has already been used",status:false});
        }else{
           let savedUser = await authModel.create(newUser);
           if(savedUser){
               res.send({message:"signup successful",status:true,newUser});
           }
        }
    } 
    catch (error) {
        if(error){
            res.send({message:"signup not succesful",status:false,error});
        }
    }
}

const signin = async (req,res)=>{
    console.log(req.body);
    let {Email, Password} = req.body
    let user = await authModel.findOne({Email:Email});
    try {
        if(!user){
            res.send({message:'Invalid email address', status:false});
        }else if(user){
            user.validatePassword(Password,(err,same)=>{
                if(err){
                    res.send({message:"Server Error", status:false});
                }else{
                    if(same){
                        let token = jwt.sign({Email}, "secret",{expiresIn:'30m'})
                        res.send({message:"user signed in Successfully",status:true,token,userId:user._id, Email:user.Email})
                    }else{
                        res.send({message:"Invalid password", status:false})
                    }
                }
            })
        }
    } catch (error) {
        res.send({message:"signin not successfull",status:false})
    }
}
module.exports = {
    signup, signin
}