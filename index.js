/**
 * author:Roushan Sourav
 * alias:VenomWolf
 */
const express =require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./configs/keys');
const {MONGO_URI} =require('./configs/db');
require('dotenv').config();
require('./models/user');
require('./services/passport');

mongoose.connect(process.env.MONGO_URI || MONGO_URI);
const app=express();
const PORT=process.env.PORT || keys.PORT;

app.use(
	cookieSession({
		maxAge:30*24*60*60*1000,
		keys:[process.env.cookie_KEYS || keys.COOKIES_KEYS]
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.get('/',function(req,res){
	res.send('bye buddy')
});
require('./routes/authRoutes')(app);

//Server listening
app.listen(PORT,()=>{
	console.log('Server is Running')
});