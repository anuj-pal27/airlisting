const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExtendedError.js");
const Listing = require("../models/listing.js");
const passport = require("passport");
const {isLoggedIn,isBooked,saveRedirectUrl} = require("../authenticationMiddleware.js");
const {bookingNewListing,renderBookingList} = require("../controllers/booking.js");
const Booking = require("../models/booking.js");

router.get("/bookinglist",isLoggedIn,wrapAsync(renderBookingList));
router.post("/listings/:id/bookedlist",isLoggedIn,isBooked,wrapAsync(bookingNewListing));

module.exports = router;