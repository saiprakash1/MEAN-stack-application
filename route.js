const express=require('express');
const router=express.Router();

const contact= require('./models/contacts')

router.get('/contact',(req,res,next)=>{
    contact.find(function(err,contacts){
      res.json(contacts);
    });
});


router.post('/contact',(req,res,next)=>{
let newContact = new contact({
  first_name:req.body.first_name,
  last_name:req.body.last_name,
  phonenumber:req.body.phonenumber
});
newContact.save((err,contact)=>{
if(err){
  res.json({msg:'Failed to add contact'});
}
else{
  res.json({msg:'Contact added successfully'});
}
});

});


router.delete('/contact/:id',(req,res,next)=>{

contact.remove({_id:req.params.id},(err,result)=>{
  if(err){
    res.json(err);
  }
  else{
    res.json(result);
  }
});

});

module.exports=router;
