const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const setPInSchema= Schema({
    Pin:{required:true,type:String},
    userId:{required:true,type:String,unique:true},
    userEmail:{required:false,type:String},
});

const setPinModel = mongoose.model("vividpay_setpin_model",setPInSchema);

module.exports=setPinModel;