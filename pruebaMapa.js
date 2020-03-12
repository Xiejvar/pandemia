// https://leaflet-extras.github.io/leaflet-providers/preview/
const OPEN_STREET_MAPS = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const OTRO_MAPA = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
const madrizCoordinates = L.latLng(40.4233873,-3.6927541,15);
const zoom = 14;
const nuclearIcon = L.icon({
	iconUrl: 'nuclear.png',
	iconSize:     [20, 20], // size of the icon
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
// Crear baldosas y marcadores
const openStreetMapsTileLayer = L.tileLayer(OPEN_STREET_MAPS);
const dibujitoTileLayer = L.tileLayer(OTRO_MAPA);
const madrizMarker = L.marker(madrizCoordinates, {icon: nuclearIcon});
// crear mapa
const map = L.map('map', {
	center: madrizCoordinates,
	zoom,
	layers: [openStreetMapsTileLayer, dibujitoTileLayer]
});
// marcadores
madrizMarker.addTo(map);
const citiesGroup = L.layerGroup([madrizMarker]);
// controladores de capas
const baseMaps = {
	'basemap': openStreetMapsTileLayer,
	'colorito': dibujitoTileLayer
};
const overlayMaps = {
	'siudade': citiesGroup
};
L.control.layers(baseMaps, overlayMaps).addTo(map);