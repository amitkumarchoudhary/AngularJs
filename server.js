var express = require('express');  
var app = express();  
var port=process.env.PORT || 8001;
var morgan=require('morgan');
var router=express.Router();
var path=require('path');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname + "/public/")));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public/app/views/index.html'));
});
app.listen(port ,function(){
    console.log("server is running on the 8001 port...");
});
