if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}

const express = require("express");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExtendedError.js");
const { listingSchema , reviewSchema} = require("./schema.js");
const listingRouter=require('./routes/listing.js');
const reviewRouter=require('./routes/reviews.js');
const userRouter= require('./routes/user.js');
const bookingRouter = require('./routes/booking.js');
//session
const session= require("express-session");
const MongoStore = require("connect-mongo");
const flash=require("connect-flash");
//Authentication
const passport=require("passport");
const localStartegy= require("passport-local");
const User= require("./models/user.js");

const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const sampleListing = require("./init/data.js");
const Review = require("./models/review.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const path = require("path");
const { extend } = require("joi");
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//serving static files
app.use(express.static(path.join(__dirname, "public")));
const dbURL= process.env.DB_URL;
main().then((res) => {
    console.log("Connected to db");

}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(dbURL);
};

const store = MongoStore.create({
    mongoUrl: dbURL,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24 *3600,
});
store.on("error",()=>{
    console.log("error in mongo session state",err);
})
const sessionUpdate={
    // store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+ 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly:true
    },
};

app.listen(port, () => {
    console.log("server listening");
});
app.use(session(sessionUpdate));
app.use(flash());
//configuring strategy for passport

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStartegy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser = req.user;
    next();
});

//Routes 
app.use('/listings',listingRouter);
app.use('/listings/:id/reviews',reviewRouter);
app.use('/',userRouter);
app.use('/',bookingRouter);

//MIDDLEWARES
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

//Error Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).render('error.ejs', { message });
});