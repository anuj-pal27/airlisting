const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");
const User = require("./user.js");
const Booking = require("./booking.js");
require("dotenv").config();
const nodemailer = require("nodemailer");
const listingSchema= new Schema({
    title: {
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        url:String,
        filename:String,
    },
    price:{
        type:Number,
        default:0,
        min:0,
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    },
    review:[{
        type:Schema.Types.ObjectId,
        ref:"Review",
    },],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    geometry:{
            type:{
              type: String, // Don't do `{ location: { type: String } }`
              enum: ['Point'], // 'location.type' must be 'Point'
              required: true
            },
            coordinates: {
              type: [Number],
              required: true
            
        }
    },
    booking:[{
        type:Schema.Types.ObjectId,
        ref:"Booking",
},],
}
); 
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.review}});
    }
});
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Booking.deleteMany({_id:{$in:listing.booking}});
    }
});
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        const bookingIds = listing.booking;

        // Delete the bookings from the User model
        const response = await User.updateMany(
          { booking: { $in: bookingIds } },
          { $pullAll: { booking: bookingIds } }
        );
        console.log("response-->",response);
    }
})


// listingSchema.post("save",async function(doc){
//     try{
//         //transporter
//         let userId = doc.owner;
//         let userData = await User.findById(userId);
//         const userName = userData.username;
//         const userEmail = userData.email;                                    
//         console.log(" userEmail-->",userEmail);

//     let transporter = nodemailer.createTransport({
//     host:process.env.MAIL_HOST,
//     auth: {
//       user:process.env.MAIL_USER,
//       pass:process.env.MAIL_PASS,
//     },
// })
//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: "Anuj pal 👻",  // sender address
//       to: userEmail, // list of receivers
//       subject: "New Listing Created", // Subject line
//       text: `Hii ${userName} , You have created a new Listing . Thanks for creating Listing.`, // plain text body
//     });
//     console.log("info",info);
//   }
//     catch(err){
//         console.log(err);
//     }
// })

const Listing= mongoose.model("Listing", listingSchema);

module.exports = Listing;
