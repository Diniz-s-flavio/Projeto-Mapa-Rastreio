const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();
app.use(cors());
app.use(bodyPars.urlencoded({extended: false}));

let port=process.env.PORT || 3000;
app.liste(port,(req,res)=>{
    console.log('Server ON')
});