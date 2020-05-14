/**
 * author:Roushan Sourav
 * alias:VenomWolf
 */
const express =require('express');
require('dotenv').config();
require('./services/passport');

const app=express();
const PORT=process.env.PORT || 5000;

app.get('/',function(req,res){
	res.send('bye buddy')
});
require('./routes/authRoutes')(app);

//Server listening
app.listen(PORT,()=>{
	console.log('Server is Running')
});