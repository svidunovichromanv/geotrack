function initMap() {
    var myLatLng = {lat: 32.69969689999776, lng: -117.20564372613164};

    // Create a map object and specify the DOM element
    // for display.
    var element = document.getElementById('map');
    var map = new google.maps.Map(element, {
        center: myLatLng,
        zoom: 13
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Geotrack'
    });
}