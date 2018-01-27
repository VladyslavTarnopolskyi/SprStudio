function initMap() {
    var locate = {lat: 52.427100, lng: 16.937800};
    var centerLoc = {lat: 52.427100, lng: 16.959600};
    var map = new google.maps.Map(document.getElementById('maps'), {
        zoom: 14,
        center: centerLoc,
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false
    });
    var marker = new google.maps.Marker({
        position: locate,
        map: map
    });
}