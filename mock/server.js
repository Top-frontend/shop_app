let express=require('express');
let app=express();
app.listen(3000);

let ad=require('./home/ad');
//广告的接口
app.get('/api/ad',(req,res)=>{
    res.send(ad);
})