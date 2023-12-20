const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("signup/signup.ejs");
}
module.exports.signUp = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Airlisting");
            res.redirect("/listings");
        })
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}
module.exports.renderLoginForm = (req, res) => {
    res.render("signup/login.ejs");
}
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome to Airlisting ! Login Successfully");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}
module.exports.logout = (req, res) => {
    req.logOut((err) => {
        if (err)
            return next(err);
        req.flash("success", "logged out successfully!");
        res.redirect("/listings");
    });
}