var express= require('express');
var mongoose= require('mongoose');
var bodyparser= require('body-parser');
var cors= require('cors');
var path= require('path');

var app=express();
const port=3000;
const route=require('./route');

app.use(cors());
app.use(bodyparser.json());



mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected',()=>{
  console.log('successfully connected');
});

mongoose.connection.on('error',(err)=>{
  console.log('error is :'+err);
});

app.use('/app',route);

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
  res.send('Heloo....');
});
app.listen(port,()=>{
  console.log('server started at port:'+port);
});
