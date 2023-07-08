const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const RegRouter = require('./src/router/regRiuter')
const app = express()
app.use(cors())

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader( 
    
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use('/registration',RegRouter)

app.listen(2200,()=>{
    console.log('http://localhost:2200');
})