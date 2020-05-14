const express =require('express');

const app=express();
const PORT=5000||process.env.PORT;

app.get('/',(req,res)=>{
	res.send({bye:'buddy'});
});
app.listen(PORT,()=>{
	console.log('Server is Running')
});