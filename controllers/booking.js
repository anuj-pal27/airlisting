const Listing = require("../models/listing.js");
const Booking = require("../models/booking.js");
const User = require("../models/user.js");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const flash = require("connect-flash");
// Use middleware to parse JSON bodies
app.use(bodyParser.json());

module.exports.renderBookingList = async(req,res)=>{
   const user = req.user._id;
   console.log("user-->",user); 
   const userData = await User.findById(user).populate('booking');
//    console.log("userData",userData);
    const bookingdata = userData.booking;
    console.log(bookingdata)
   res.render("listings/bookinglist.ejs",{bookingdata,userData});
}

module.exports.bookingNewListing = async(req,res)=>{
    let{id} = req.params;
    console.log(req.body);
    let {checkInDate,checkOutDate} = req.body;
    if(checkInDate==='checkInDate' || checkOutDate === 'checkOutDate'){
        req.flash("error","enter the dates");
       return res.redirect(`/listings/${id}`);
    }
    console.log(checkInDate,checkInDate);
    let listing = await Listing.findById(id).populate('User');
    const user = await User.findById(req.user._id);
    const newBooking = new Booking({listingName:`${listing.title}`,checkInDate,checkOutDate});
    user.booking.push(newBooking);
    user.save();
    newBooking.save();
    listing.booking.push(newBooking);
    listing.save();
    res.render("listings/booking.ejs");  
}


