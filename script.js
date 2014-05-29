function initialize() {

  var mapOptions = {

    zoom: 7,
    center: new google.maps.LatLng(45.935139, 24.976111),
    // possible values: HYBRID, ROADMAP, SATELLITE, TERRAIN
    mapTypeId: google.maps.MapTypeId.ROADMAP,

/* =======================================================================
 * 45° imagery
 * ======================================================================= */

    // zoom: 18,
    // heading: 180,
    // tilt: 45,
    // center: new google.maps.LatLng(46.76944253698589, 23.589907586574554),
    // mapTypeId: google.maps.MapTypeId.SATELLITE,

/* =======================================================================
 * toggle controls
 * ======================================================================= */

    // disableDefaultUI: true,
    // panControl: false,
    // streetViewControl: false,
    // zoomControl: false,
    // mapTypeControl: false,
    // scaleControl: false,

/* =======================================================================
 * pan control options
 * ======================================================================= */

    // panControlOptions: {
    // // possible values: BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT,
    // //                  LEFT_BOTTOM, LEFT_CENTER, LEFT_TOP, RIGHT_BOTTOM,
    // //                  RIGHT_CENTER, RIGHT_TOP, TOP_CENTER,
    // //                  TOP_LEFT, TOP_RIGHT
    //   position: google.maps.ControlPosition.BOTTOM_CENTER
    // },

/* =======================================================================
 * street view control options
 * ======================================================================= */

    // streetViewControlOptions: {
    // // possible values: BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT,
    // //                  LEFT_BOTTOM, LEFT_CENTER, LEFT_TOP, RIGHT_BOTTOM,
    // //                  RIGHT_CENTER, RIGHT_TOP, TOP_CENTER, TOP_LEFT,
    // //                  TOP_RIGHT
    //   position: google.maps.ControlPosition.BOTTOM_CENTER
    // },

/* =======================================================================
 * zoom control options
 * ======================================================================= */

    // zoomControlOptions: {
    // // possible values: BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT,
    // //                  LEFT_BOTTOM, LEFT_CENTER, LEFT_TOP, RIGHT_BOTTOM,
    // //                  RIGHT_CENTER, RIGHT_TOP, TOP_CENTER, TOP_LEFT,
    // //                  TOP_RIGHT
    //   position: google.maps.ControlPosition.BOTTOM_CENTER,
    // // possible values: DEFAULT, LARGE, SMALL
    //   style: google.maps.ZoomControlStyle.DEFAULT
    // },

/* =======================================================================
 * map type control options
 * ======================================================================= */

    // mapTypeControlOptions: {
    // // possible values: BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT,
    // //                  LEFT_BOTTOM, LEFT_CENTER, LEFT_TOP, RIGHT_BOTTOM,
    // //                  RIGHT_CENTER, RIGHT_TOP, TOP_CENTER, TOP_LEFT,
    // //                  TOP_RIGHT
    //   position: google.maps.ControlPosition.BOTTOM_CENTER,
    // // possible values: DEFAULT, DROPDOWN_MENU, HORIZONTAL_BAR
    //   style: google.maps.MapTypeControlStyle.DEFAULT
    // },

/* =======================================================================
 * scale control options
 * ======================================================================= */

    // scaleControlOptions: {
    // // possible values: BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT,
    // //                    LEFT_BOTTOM, LEFT_CENTER, LEFT_TOP, RIGHT_BOTTOM,
    // //                    RIGHT_CENTER, RIGHT_TOP, TOP_CENTER, TOP_LEFT,
    // //                    TOP_RIGHT
    //   position: google.maps.ControlPosition.BOTTOM_CENTER
    // },

/* =======================================================================
 * scroll and cursor
 * ======================================================================= */

    // scrollwheel: false,
    // // possible values: URL, auto, crosshair, default, e-resize, help,
    // //                    move, n-resize, ne-resize, nw-resize, pointer,
    // //                    progress, s-resize, se-resize, sw-resize, text,
    // //                    w-resize, wait, inherit
    // draggableCursor: "default",
    // // possible values: URL, auto, crosshair, default, e-resize, help,
    // //                    move, n-resize, ne-resize, nw-resize, pointer,
    // //                    progress, s-resize, se-resize, sw-resize, text,
    // //                    w-resize, wait, inherit
    // draggingCursor: "default",

  },

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

/* =======================================================================
 * infowindow enabled marker
 * ======================================================================= */

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(46.7667, 23.6),
    title: "Hello :)",
    map: map
  });

  google.maps.event.addListener(marker, "click", function() {
    var infowindow = new google.maps.InfoWindow({
      content: "<p>Bla bla bla</p>",
      maxWidth: 200
    });
    infowindow.open(map, marker);
  });

/* =======================================================================
 * custom markers
 * ======================================================================= */

  var sheepCoords = [[46.4, 24.976111], [46.3, 24.876111], [46.3, 25.076111],
                      [46.5, 24.876111], [46.5, 25.076111], [46.4, 24.776111],
                      [46.4, 25.176111]];
  for (var i = 0; i < sheepCoords.length; i++) {
    var sheepMarker = new google.maps.Marker({
      position: new google.maps.LatLng(sheepCoords[i][0], sheepCoords[i][1]),
      title: "Baaah!",
      map: map,
      icon: "img/small-sheep-" + Math.floor((Math.random() * 2) + 1) + ".png"
    });
    // insert free advertising
    google.maps.event.addListener(sheepMarker, "click", function() {
      window.open("http://www.helpfulsheep.com/");
    });
  }

/* =======================================================================
 * add markers on click
 * ======================================================================= */

  // google.maps.event.addListener(map, "click", function(e) {
  //   var marker = new google.maps.Marker({
  //     position: e.latLng,
  //     title: "Hi, I'm new here",
  //     map: map
  //   });
  //   map.panTo(e.latLng);
  // });

/* =======================================================================
 * attempt geolocation
 * ======================================================================= */

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //     var infowindow = new google.maps.InfoWindow({
  //       position: pos,
  //       content: "You are here",
  //       map: map
  //     });
  //     map.setCenter(pos);
  //   }, function() {
  //     handleNoGeolocation(true);
  //   });
  // } else {
  //   handleNoGeolocation(false);
  // }
  // function handleNoGeolocation(errorFlag) {
  //   if (errorFlag) {
  //     var message = "Error: The Geolocation service failed";
  //   } else {
  //     var message = "Error: Your browser doesn't support geolocation";
  //   }
  //   alert(message);
  // }

}

google.maps.event.addDomListener(window, "load", initialize);