// Model

// Location Database (where markers are to be placed)
var Location= function(name, venueID, lat, lng) {
    var self= this;
    this.name= name;
    this.venueID= venueID;
    this.lat= lat;
    this.lng= lng;
}

//Array containing loaction information
var locationInfo= {
    location: [
    new Location('Marine Drive', '4b0587d1f964a520d1a222e3', 18.938358, 72.824038), //1
    new Location('Essel World', '4b0587e6f964a5205da622e3', 19.230973, 72.806482), //2
    new Location('Gateway Of India', '4b0587d1f964a520cea222e3', 18.922248, 72.834622), //3
    new Location('Wankhede Stadium', '4b0587dbf964a5207da422e3', 18.931011, 72.824852), //4
    new Location('Sanjay Gandhi National Park', '4b0587d1f964a520d8a222e3', 19.232800, 72.864075), //5
    new Location('Worli Sea Face', '4b7fecb5f964a520c04430e3', 19.009320, 72.815079), //6
    new Location('Juhu Beach', '4d0d00a6f393224bbadc19ee', 19.097188, 72.826557), //7
    new Location('Mount Mary Church', '4b0587d2f964a520f3a222e3', 19.046538, 72.822417), //8
    new Location('Haji Ali Dargah', '4dc0d7281838710f436fa414', 18.982759, 72.808859), //9
    new Location('Siddhivinayak Temple', '4b0587e4f964a520fba522e3', 19.017915, 72.832019), //10
    new Location('Hanging Garden', '4b0587d1f964a520e2a222e3', 18.957086, 72.804802), //11
    new Location('Powai Lake Promenade', '4c7e3fffb33a224bca42da81', 19.119931, 72.902955), //12
    new Location('Aksa Beach', '4b0587d3f964a5202aa322e3', 19.175975, 72.795096), //13
    new Location('Bandra Promenade', '4ba62853f964a520dd3739e3', 19.050631, 72.821449), //14
    new Location('Film City', '4b0587d1f964a520e6a222e3', 19.162949, 72.883660), //15
    new Location('Nehru Planetarium', '4b0587e6f964a5205ea622e3', 18.989437, 72.813913), //16
    new Location('Prince Of Wales Museum', '4b0587d1f964a520cfa222e3', 18.926893, 72.832592), //17
    new Location('Jehangir Art Gallery', '4b0587d3f964a5203ca322e3', 18.927476, 72.831682), //18
    ],
    query: ko.observable(' '),
};

//getInfo function retrives data from Foursquare API for the selected location
this.getInfo= function() {
    var clientID = "05EEJUP44W0Z1GTQPIDWQL0S0ZOW2FD5UQQFX3P3CCGSDKE0";
    var clientSecret = "42WSQ4GINX0ENYC01G020AFSHOJYUE35JBK2XXR0G1ZXFQJX";
    var FoursquareUrl = "https://api.foursquare.com/v2/venues/" + venueID + "?client_id=" + clientID + "&client_secret=" + clientSecret + "";
}

// I want to have ratings and short description abt venues in locationInfo from FOURSQUARE API

// Marker icon
this.icon= 'https://www.iconfinder.com/icons/88051/azure_mapmarker_marker_outside_icon#size=16';

//marker to be showed at location
this.marker= new google.maps.Marker( {
    position: new google.maps.LatLng(self.lat, self.lng),
    map: map,
    name: self.name,
    icon: self.icon
});


// View Model