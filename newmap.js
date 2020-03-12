const OPEN_STREET_MAPS = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const OTRO_MAPA = 'https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png';
const madrizCoordinates = L.latLng(40.4233873,-3.6927541,15);
const zoom = 14;
//coordenadas
const bridgeCoordinates = L.latLng(40.421558, -3.692666);
const ironHackCordinates = L.latLng(40.421558, -3.692666);
//iconos
const bridgeIcon = L.icon({
    iconUrl: 'theBridge.jpg',
    iconSize:     [20, 20], 
    iconAnchor:   [10, 10], 
    popupAnchor:  [-3, -76] 
});
const ironHackIcon = L.icon({
    iconUrl: 'ironHack.jpg',
    iconSize:     [20, 20], 
    iconAnchor:   [10, 10], 
    popupAnchor:  [-3, -76] 
});
//circulos
const theBridge = L.circle([40.421558, -3.692666], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
});

const neoland = L.circle([40.422332, -3.714069], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
});

const upgradeHub = L.circle([40.458950, -3.694684], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
});

const ironHack = L.circle([40.392592, -3.698315], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
});

const adalab = L.circle([40.413272, -3.718223], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
});

const keepcoding = L.circle([40.404366, -3.689889], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
});
const area = L.polygon([
    [40.422332, -3.714069],
    [40.458950, -3.694684],
    [40.413272, -3.718223],
    [40.392592, -3.698315],
    [40.404366, -3.689889],
    [40.421558, -3.692666]
]);

const circulos = L.layerGroup(theBridge,neoland,upgradeHub,ironHack,adalab,keepcoding);
const openStreetMapsTileLayer = L.tileLayer(OPEN_STREET_MAPS);
const dibujitoTileLayer = L.tileLayer(OTRO_MAPA);
const bridge = L.marker(bridgeCoordinates, {icon: bridgeIcon}),
     iron = L.marker(ironHackCordinates, {icon: ironHackIcon});

const map = L.map('map', {
	center: madrizCoordinates,
	zoom,
	layers: [openStreetMapsTileLayer, dibujitoTileLayer]
});



const bootCamps = L.layerGroup([bridge,iron]);

const baseMaps = {
	'Normal': openStreetMapsTileLayer,
	'Infernal': dibujitoTileLayer
};
const overlayMaps = {
    'Bootcamps': bootCamps,
    'Infeccion': circulos ,
    'area': area
};
L.control.layers(baseMaps, overlayMaps).addTo(map);