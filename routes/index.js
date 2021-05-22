const mongoose = require('mongoose')
const Data = mongoose.model("DATA")

exports.leta = (req,res)=>{

    const {temperature,humidity,position,gas} = req.params
    const data = new Data()
    var date = new Date()
    var currentDate = date.toLocaleDateString("en-US",{timeZone:"Africa/Nairobi"})
    var currentTime = date.toLocaleTimeString("en-US",{timeZone:"Africa/Nairobi"})
    data.temperature = temperature;
    data.humidity = humidity;
    data.position = position;
    data.gas = gas;
    data.date = currentDate;
    data.time = currentTime;
    data.save((err,docs)=>{
        if (!err){
            console.log("Data has bee sent to the database")
        }else{
            console.log("Data has not sent to the database")
        }
    })
    res.send("data has been sent")
}

exports.pata = (req,res)=>{
    Data.find((err,docs)=>{
        if(!err){
            res.json(docs)
        }else{
            console.log("there is an error in sending data")
        }
      
    })
}