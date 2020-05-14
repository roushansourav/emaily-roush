const passport =require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');

const User=mongoose.model('users');

passport.serializeUser((user,done)=>{
	done(null,user.id);
});

passport.deserializeUser((id,done)=>{
	User.findById(id)
		.then(user=>{
			done(null,user);
		})
		.catch(err=>done(err,null))
})

passport.use(new GoogleStrategy(
	{
		clientID:process.env.googleCLIENT_ID,
		clientSecret:process.env.googleCLIENT_SECRET,
		callbackURL:process.env.googleCALLBACK_URI,
	},function(accessToken,refreshToken,profile,done){
		User.findOne({googleId:profile.id})
			.then((user)=>{
				if(user){
					//we are having record.
					//done(errmsg,userrecord);
					done(null,user);
				}
				else{
					//we don't have user record.
					new User({googleId:profile.id}).save()
						.then(user=>done(null,user))
						.catch((err)=>done(err,null))
				}
			})
			.catch((err)=>done(err,null))		
	}
));