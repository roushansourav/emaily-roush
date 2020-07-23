const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../configs/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user);
		})
		.catch(err => done(err, null))
})

passport.use(new GoogleStrategy(
	{
		clientID: process.env.googleCLIENT_ID || keys.GOOGLE.CLIENT_ID,
		clientSecret: process.env.googleCLIENT_SECRET || keys.GOOGLE.CLIENT_SECRET,
		callbackURL: process.env.googleCALLBACK_URI || keys.GOOGLE.CALLBACK_URI,
	}, async function (accessToken, refreshToken, profile, done) {
		const existingUser = await User.findOne({ googleId: profile.id });
		if (existingUser) {
			return done(null, existingUser);
		}

		const user = await new User({ googleId: profile.id }).save()
		done(null, user);

	}
));