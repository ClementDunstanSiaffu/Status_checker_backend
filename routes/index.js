const mongoose = require('mongoose')
const Data = mongoose.model("DATA")

exports.leta = async(req,res)=>{

    const {temperature,humidity,position,gas} = req.params
    const dataBase = new Data()
    var date = new Date()
    var currentDate = date.toLocaleDateString("en-US",{timeZone:"Africa/Nairobi"})
    var currentTime = date.toLocaleTimeString("en-US",{timeZone:"Africa/Nairobi"})
    dataBase.temperature = temperature;
    dataBase.humidity = humidity;
    dataBase.position = position;
    dataBase.gas = gas;
    dataBase.date = currentDate;
    dataBase.time = currentTime;  
    dataBase.save((err,docs)=>{
        if (!err){
            res.send("SUCCESS")
        }else{
            console.log("Data has not sent to the database")
        }
    })
}

exports.pata = (req,res)=>{
    Data.find((err,docs)=>{
        if(!err){
            console.log(docs)
            res.json(docs)
        }else{
            console.log("there is an error in sending data")
        }
      
    })
}