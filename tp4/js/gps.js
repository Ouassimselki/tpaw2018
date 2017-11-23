// demande de la localisation à l'utilisateur
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        $("#map").html("Geolocation is not supported by this browser.");
    }
}

// Si l"utilisateur l'autorise, on récupère les coordonnées dans l'objet "position"
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&markers="+latlon+"&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg";
            // ajout du marker
    $("#map").html("<center><img src='"+img_url+"'></center>");

    getCity(position.coords.latitude, position.coords.longitude)


    
}

// Au cas ou l'utilisateur refuse
// Ou si une erreur arrive
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            $("#map").html("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            $("#map").html("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            $("#map").html("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            $("#map").html("An unknown error occurred.");
            break;
    }
}

var geocoder ;
function initMap(){
     geocoder = new google.maps.Geocoder;
    
}

function getCity(lat,lon){

    var latlng = {lat: lat, lng: lon};
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[1]) {
          
          console.log(results[1].formatted_address);
          $("#adresse").val(results[1].formatted_address);

        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
}