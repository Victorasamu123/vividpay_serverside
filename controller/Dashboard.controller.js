const authModel = require("../model/auth.model");

const getUserDetials = async(req,res)=>{
    console.log(req.body);
    let {userId} = req.body;
    let userDetails = await authModel.findOne({_id:userId});
    console.log(userDetails);
    try {
        if(userDetails){
            res.send({message:"that it ooo", status:true, userDetails})
        }
    } catch (error) {
        res.send({message:"Server Error", status:false});
    }
}

module.exports={getUserDetials}