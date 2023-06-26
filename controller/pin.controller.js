const setPinModel = require("../model/pin.model");

const setpin= async(req,res)=>{
    const pin = new setPinModel({
        Pin:req.body.Pin,
        userId:req.body.userId,
        userEmail:req.body.userEamil
    });
    
    try {
        let newPin = await setPinModel.create(pin);
        if(newPin){
            res.send({message:'Pin was set successfully', status:true})
        }
    } catch (error) {
        res.send({message:'Pin was not set successfully', status:false,error});
    }
}

module.exports= {setpin};