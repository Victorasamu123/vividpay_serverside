const authModel = require("../model/auth.model");

const signup = async(req,res)=>{
    // console.log(req.body);
    const newUser = new authModel({
        Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        Email:req.body.Email,
        Phonenumber:req.body.Phonenumber,
        DOB:req.body.DOB,
        Password:req.body.Password,
        Profilepicture:req.body.Profilepicture,
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
               res.send({message:"signup successful",status:true});
           }
        }
    } 
    catch (error) {
        if(error){
            res.send({message:"signup not succesful",status:false,error});
        }
    }
}

module.exports = {
    signup,
}