const http =require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const path=require('path');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(express.static(path.join(__dirname,'public')))   //static folder path 

 app.use('/admin',adminRoutes);
 app.use(shopRoutes);
// app.use((req,res,next)=>{
//     console.log("middleware")
//     next();                   //allows next middleware in line to execute
// });
//if above gets executed this will not * order matter 
//every route which starts with / will show this

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','Error.html'))
})

app.listen(3000);