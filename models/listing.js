const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");
const User = require("./user.js");
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
    // category:{
    //     type:String,
    //     array:['trending','rooms','iconicCities','mountains','castles','amazingpools','camping','farming','arctic'],
    // },
}
); //'trending','rooms','iconicCities','mountains','castles','amazingpools','camping','farming','arctic'
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.review}});
    }
});

const Listing= mongoose.model("Listing", listingSchema);

module.exports = Listing;
