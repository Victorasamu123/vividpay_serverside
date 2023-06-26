const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


const Schema = mongoose.Schema;
const authSchema = Schema({
    Firstname:{required:true,type:String},
    Lastname:{required:true,type:String},
    Email:{required:true,type:String,unique:true},
    Phonenumber:{required:true,type:String,unique:true},
    DOB:{required:true,type:String},
    Password:{required:true,type:String},
    Profilepicture:{required:false,type:String},
    AccountNumber:{required:true,type:String,uniue:true},
    AccountBalance:{required:true,type:String},
    BVN:{required:true,type:String,uniue:true}
})

let saltRound =10;
authSchema.pre("save",function(next){
    console.log(this.Password)
    bcrypt.hash(this.Password,saltRound,(err,hashedPassword)=>{
        if(!err){
            console.log(hashedPassword);
            this.Password=hashedPassword
            next()
        }
    })
});

const authModel = mongoose.model("vividpay_auth",authSchema);

module.exports = authModel;