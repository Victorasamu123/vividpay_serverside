const setPinModel = require("../model/pin.model");

const setpin= async(req,res)=>{
    const pin = new setPinModel({
        Pin:req.body.Pin,
        userId:req.body.userId,
        userEamil:req.body.userEamil
    });

    try {
        let newPin = await setPinModel.create(pin);
        if(newPin){
            res.send({message:'Pin was set successfully', status:true})
        }
    } catch (error) {
        res.send({message:'Pin was not set successfully', status:false});
    }
}

module.exports= {setpin};