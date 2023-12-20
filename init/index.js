const mongoose=require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const { object } = require("joi");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().then((res)=>{
    console.log("Connected to db");

}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
};

async function initDB(){
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj , owner:"65790bfa5713b6f69ece29e7"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
initDB();