const passport = require("passport");
const localStartegy= require("passport-local");
const Listing = require("./models/listing.js");
const ExpressError = require("./utils/ExtendedError.js");
const { listingSchema , reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");
const Booking = require("./models/booking.js");
const User = require("./models/user.js");

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl ;  //for post login
        req.flash("error","you must be logged in to create a listing");
        return res.redirect("/login");
    }
    next();
};
 //for post login
module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next)=>{
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    };
    next();
};


module.exports.isReviewAuthor = async(req,res,next)=>{
    let {id,reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    };
    next();
};

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else
        next();
};

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else
        next();
};

module.exports.isBooked= async(req,res,next)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    const booking = await Booking.findById(listing.booking);
    const user = await User.findById(res.locals.currUser._id);
    console.log(booking);
  
    if(listing && listing.booking.length > 0){
           // Check if the current user has booked any of the listings
           const userBookings = user.booking.map(bookingId => bookingId.toString()); // Convert ObjectIds to strings for comparison
           const intersection = userBookings.filter(bookingId => listing.booking.includes(bookingId));
        
           if (intersection.length > 0) {
               req.flash('error', 'you have already booked this listing');
               return res.redirect(`/listings/${id}`);
           }
};
    next();
}