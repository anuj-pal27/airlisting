const express = require('express');
const router = express.Router({mergeParams:true}); //mergeParams is use for routing parameters parent to child merge or merge id with review
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExtendedError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn,isReviewAuthor} = require("../authenticationMiddleware.js");

const { createReview, deleteReview } = require('../controllers/review.js');

// Create Review
router.post('/', isLoggedIn,validateReview, wrapAsync(createReview));
//Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(deleteReview));

module.exports=router;