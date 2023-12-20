mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({color: "rgb(212, 78, 11)"})
    .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
    .setPopup(
        new mapboxgl.Popup({ offset:25}).setHTML(
            `<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`
        )
    )
    .addTo(map);