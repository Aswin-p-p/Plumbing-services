const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aswinpp:aswinpp@cluster0.pazz29g.mongodb.net/pro-practice_db?retryWrites=true&w=majority')

const schem =  mongoose.Schema

const regScehma = new schem ({
    name:{type:String,require:true},
    email:{type:String,require:true},
    number:{type:String,require:true},
    password:{type:String,require:true}
})

const regModel = mongoose.model('data',regScehma)

module.exports=regModel