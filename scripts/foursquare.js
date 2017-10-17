/**********FourSquare***************/
let items =[ ];

($.ajax({
    url:'https://api.foursquare.com/v2/venues/explore',
    method: 'GET',
    dataType: 'json',
    data: 'limit=5' +
            '&near='+ "San Francisco, CA" +
            '&client_id=FC3C2VK4UPVVYEJESMJUG0TIN2IRIF5YPU5Y1XOYXI3RMAHH' +
            '&client_secret=3MEGPSXCNYHECURVFIP5JNK1UX2E3U0N0XW3XAGKETU2I4YJ' +
            '&v=20140806' +
            '&m=foursquare' +
            '&query=coffee',
    async: true,

    success: function (data) {
        var result = data.response;
        // console.log(data.response.groups[0].items);
    }
})).then(function(result){
    items = result.response.groups[0].items;
});

// var map = L.mapbox.map('map', 'landplanner.h1dknok1', {
//         attributionControl: true
//     })
//     .setView([44.475, -73.212], 13);
// // Credit Foursquare for their wonderful data
// map.attributionControl
//     .addAttribution('<a href="https://foursquare.com/">Places data from Foursquare</a>');
// // Create a Foursquare developer account:
// // https://developer.foursquare.com/
// // AND CHANGE THESE VALUES TO YOUR OWN:
// // otherwise they can be cycled or deactivated with zero notice.
// var CLIENT_ID = 'L4UK14EMS0MCEZOVVUYX2UO5ULFHJN3EHOFVQFSW0Z1MSFSR';
// var CLIENT_SECRET = 'YKJB0JRFDPPSGTHALFOEP5O1NDDATHKQ2IZ5RO2GOX452SFA';
// // https://developer.foursquare.com/start/search
// var API_ENDPOINT = 'https://api.foursquare.com/v2/venues/search' +
//   '?client_id=CLIENT_ID' +
//   '&client_secret=CLIENT_SECRET' +
//   '&v=20130815' +
//   '&ll=LATLON' +
//   //This is the "cafe" category:
//   '&categoryId=4bf58dd8d48988d16d941735' +
//   //Uncomment this query to find specific cafe names:
//   //'&query=cafe, coffee' +
//   '&callback=?';
// // Keep our place markers organized in a nice group.
// var foursquarePlaces = L.layerGroup().addTo(map);
// // Use jQuery to make an AJAX request to Foursquare to load markers
// // data.
// $.getJSON(API_ENDPOINT
//     .replace('CLIENT_ID', CLIENT_ID)
//     .replace('CLIENT_SECRET', CLIENT_SECRET)
//     .replace('LATLON', map.getCenter().lat +
//         ',' + map.getCenter().lng), function(result, status) {
//     if (status !== 'success') return alert('Request to Foursquare failed');
//     // Transform each venue result into a marker on the map.
//     for (var i = 0; i < result.response.venues.length; i++) {
//       var venue = result.response.venues[i];
//       var latlng = L.latLng(venue.location.lat, venue.location.lng);
//       var marker = L.marker(latlng)
//         .setIcon(L.mapbox.marker.icon({'marker-symbol': 'cafe', 'marker-color': 'FFA500'}))
//         .bindPopup('<h2><a href="https://foursquare.com/v/' + venue.id + '">' +
//             venue.name + '</a></h2>')
//         .addTo(foursquarePlaces);
//     }
// });