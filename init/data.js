const sampleListing = ([
    {
        title: "Luxury Resort Paradise",
        description: "A luxurious resort with stunning views and world-class amenities.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
            location: "Beachfront, Malibu",
        country: "United States",
        price: 4000,
    },
    {
        title: "Cityscape Boutique Hotel",
        description: "Chic boutique hotel in the heart of the city, perfect for urban explorers.",
        image: {
            filename:"listingimage",
            url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        location: "Downtown, Paris",
        country: "France",
        price: 3000,
    },
    {
        title: "Mountain Retreat Lodge",
        description: "Escape to the mountains and enjoy a cozy lodge surrounded by nature.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        } ,
        location: "Rocky Mountains, Colorado",
        country: "United States",
        price: 2500,
    },
    {
        title: "Historic Charm Inn",
        description: "Experience the charm of a historic inn in a quaint town with rich heritage.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }, 
        location: "Cotswolds, England",
        country: "United Kingdom",
        price: 6000,
    },
    {
        title: "Tropical Oasis Resort",
        description: "A tropical paradise with lush gardens and private bungalows.",
        image:{
            filename:"listingimage",
            url:"https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }, 
        location: "Isla Holbox, Yucatan",
        country: "Mexico",
        price: 4000,
    },
    {
        title: "Ski Lodge Retreat",
        description: "Cozy lodge nestled in the snowy mountains, perfect for winter sports enthusiasts.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        location: "Aspen, Colorado",
        country: "United States",
        price: 7000,
    },
    {
        title: "Seaside Villas",
        description: "Exclusive seaside villas with private beach access and panoramic ocean views.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }, 
        location: "Amalfi Coast, Italy",
        country: "Italy",
        price: 2300,
    },
    {
        title: "Modern Urban Oasis",
        description: "Sleek and modern hotel with a rooftop pool, located in the vibrant city center.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        location: "Shibuya, Tokyo",
        country: "Japan",
        price: 2000,
    },
    {
        title: "Wilderness Camping Experience",
        description: "Unplug and unwind in luxurious tents, surrounded by untouched nature.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }, 
        location: "Patagonia, Argentina",
        country: "Argentina",
        price: 2100,
    },
    {
        title: "Cultural Heritage Inn",
        description: "Immerse yourself in the local culture at this charming inn with traditional architecture.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }, 
        location: "Marrakech, Morocco",
        country: "Morocco",
        price: 9000,
    },
    {
        title: "Sandy Shores Beach",
        description: "A beautiful sandy beach with crystal-clear waters.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        location: "Coastal City",
        country: "India",
        price: 8000,
    },
    {
        title: "Mountain Bay Beach",
        description: "Relax on the shores of a bay surrounded by mountains.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        location: "Mountain Town",
        country: "NewZealand",
        price: 10000,
    },
    {
        title: "Tropical Escape Beach",
        description: "Escape to a tropical paradise with palm trees and white sand.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }, 
        location: "Tropical Island",
        country: "Africa",
        price: 12000,
    },
    {
        title: "Cityscape Hotel",
        description: "Modern hotel in the heart of the city.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        location: "Metropolis City",
        country: "Canada",
        price: 12000.00,
    },
    {
        title: "Alpine Retreat Resort",
        description: "Escape to a cozy resort nestled in the alpine mountains.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }, 
        location: "Alpine Village",
        country: "Canada",
        price: 18000.00,
    },
    {
        title: "Island Oasis Hotel",
        description: "Experience a tropical paradise on a secluded island.",
        image:{
            filename:"listingimage",
            url:"https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        location: "Tropical Island",
        country: "Africa",
        price: 25000,
    }
]
);

module.exports = { data: sampleListing };