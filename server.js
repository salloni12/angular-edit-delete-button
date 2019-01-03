var express = require('express');
var app =express();

//var router=require('./add');
//app.use(router);
//port no
var port=3000;
app.get('*', (req, res) => {
    
   return res.sendfile('./public/index.html');
});
app.use((req,res,next)=>{
    
       const error= new Error('Not found')
       error.status=404;
       next(error);
    })
    
    app.use((error,req,res,next)=>{
    
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
    });

app.listen(port, () => {
   console.log('Server started on :' +port);
});
