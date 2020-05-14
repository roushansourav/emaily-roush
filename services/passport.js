const passport =require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy(
	{
		clientID:process.env.googleCLIENT_ID,
		clientSecret:process.env.googleCLIENT_SECRET,
		callbackURL:process.env.googleCALLBACK_URI,
	},function(accessToken,refreshToken,profile,done){
		console.log('accessToken: ',accessToken,'refreshToken: ',refreshToken,'profile: ',profile);
	}
));