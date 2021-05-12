var corner1 = L.latLng(47.27, 5.51),
corner2 = L.latLng(35.00, 18.52),
bounds = L.latLngBounds(corner1, corner2);
var mapOptions = {
    maxBounds: bounds,
    minZoom: 6,
    maxZoom: 11
}

var map = new L.map('m', mapOptions);
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
map.fitBounds([
    [47.27, 5.51],
    [35.00, 18.52]
]);
