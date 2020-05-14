const express =require('express');
const passport =require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
require('dotenv').config();

const app=express();
const PORT=process.env.PORT || 5000;
passport.use(new GoogleStrategy(
	{
		clientID:process.env.googleCLIENT_ID,
		clientSecret:process.env.googleCLIENT_SECRET,
		callbackURL:process.env.googleCALLBACK_URI,
	},function(accessToken){
		console.log(accessToken)
	}
));

app.get('/auth/google',
passport.authenticate('google',{
	scope:['profile','email']
}));



//Server listening
app.listen(PORT,()=>{
	console.log('Server is Running')
});