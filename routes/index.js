const mongoose = require('mongoose')
const Data = mongoose.model("DATA")

exports.leta = async(req,res)=>{

    const {id,temperature,humidity,position,gas} = req.params
    const dataBase = await Data.findOne({id:id})
    const docs = await Data.find((err,docs)=>{
        if (!err){
            return docs
        }
    })
    const index = docs.findIndex((doc)=>doc.id == dataBase.id)
    var date = new Date()
    var currentDate = date.toLocaleDateString("en-US",{timeZone:"Africa/Nairobi"})
    var currentTime = date.toLocaleTimeString("en-US",{timeZone:"Africa/Nairobi"})
    dataBase.temperature = temperature;
    dataBase.humidity = humidity;
    dataBase.position = position;
    dataBase.gas = gas;
    dataBase.date = currentDate;
    dataBase.time = currentTime;
    await Data.replaceOne(docs[index],dataBase)
    res.send("SUCCESS")
    
    
    // data.save((err,docs)=>{
    //     if (!err){
    //         console.log("Data has bee sent to the database")
    //     }else{
    //         console.log("Data has not sent to the database")
    //     }
    // })
    // res.send("data has been sent")
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