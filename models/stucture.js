const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    id:{
        type:Number
    },
    temperature:{
        type:Number
    },
    humidity:{
        type:Number
    },
    position:{
        type:String
    },
    gas:{
        type:Number
    },
    date:{
        type:String
    },
    time:{
        type:String
    }
})

mongoose.model("DATA",dataSchema)