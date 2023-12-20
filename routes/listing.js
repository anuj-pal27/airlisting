const express=require('express');
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExtendedError.js");
const { listingSchema , reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const flash=require('connect-flash');
const ListingController = require("../controllers/listings.js");
const passport = require("passport");
const {isLoggedIn, isOwner , validateListing} = require("../authenticationMiddleware.js");
//for uploading images
const multer  = require('multer'); 
const {storage} =require("../cloudConfig.js");
const upload = multer( {storage} );

//index and create route
router.route("/")
.get( wrapAsync(ListingController.index))
.post(isLoggedIn, upload.single('listing[image]'),validateListing, wrapAsync(ListingController.createListing));
// .post(upload.single('listing[image]'),(req,res)=>{
//     res.send(req.file);
// });

//new route
router.get('/new',isLoggedIn, ListingController.renderNewListing);

//show , update and delete route
router.route("/:id")
.get(wrapAsync(ListingController.showListing))
.patch(isLoggedIn, isOwner ,upload.single('listing[image]'),validateListing, wrapAsync(ListingController.updateListing))
.delete(isLoggedIn, isOwner,wrapAsync(ListingController.deletingListing));


//Edit Route
router.get('/:id/edit',isLoggedIn,isOwner, wrapAsync(ListingController.editListing));


module.exports=router;