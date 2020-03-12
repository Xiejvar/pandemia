
//Esto es el mapa basico
const OPEN_STREET_MAPS = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const OTRO_MAPA = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';

var grayscale = L.tileLayer(OPEN_STREET_MAPS, {id: 'mapa', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    streets   = L.tileLayer(OTRO_MAPA, {id: 'mapa', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

var bridgee = L.marker([40.421558, -3.692666]).bindPopup('TheBridge'),
        ironhackk =L.marker([40.392592, -3.698315]).bindPopup('Ironhack'), 
        adalabb = L.marker([40.413272, -3.718223]).bindPopup('Adalab'), 
        keepcodingg = L.marker([40.404366, -3.689889]).bindPopup('Keepcoding'), 
        neolandd = L.marker([40.422332, -3.714069]).bindPopup('Neoland'), 
        upgradeHubb = L.marker([40.458950, -3.694684]).bindPopup('UpgradeHub');
        
const madrizCoordinates = L.latLng(40.4233873,-3.6927541,15);

const zoom = 14;

const map = L.map('map');

const theBridge = L.circle([40.421558, -3.692666], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

const neoland = L.circle([40.422332, -3.714069], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

const upgradeHub = L.circle([40.458950, -3.694684], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

const ironHack = L.circle([40.392592, -3.698315], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

const adalab = L.circle([40.413272, -3.718223], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

const keepcoding = L.circle([40.404366, -3.689889], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

//Creacion de iconos
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

const adalabIcon = L.icon({
    iconUrl: 'adalab.jpg',
    iconSize:     [20, 20], 
    iconAnchor:   [10, 10], 
    popupAnchor:  [-3, -76] 
});

const keepcodingIcon = L.icon({
    iconUrl: 'keepcoding.png',
    iconSize:     [20, 20], 
    iconAnchor:   [10, 10], 
    popupAnchor:  [-3, -76] 
});

const neolandIcon = L.icon({
    iconUrl: 'neoland.png',
    iconSize:     [20, 20], 
    iconAnchor:   [10, 10], 
    popupAnchor:  [-3, -76] 
});

const upgradeHubIcon = L.icon({
    iconUrl: 'upgrade.jpg',
    iconSize:     [20, 20], 
    iconAnchor:   [10, 10], 
    popupAnchor:  [-3, -76] 
});




map.setView(madrizCoordinates, zoom);

L.tileLayer(OPEN_STREET_MAPS).addTo(map);





const area = L.polygon([
    [40.422332, -3.714069],
    [40.458950, -3.694684],
    [40.413272, -3.718223],
    [40.392592, -3.698315],
    [40.404366, -3.689889],
    [40.421558, -3.692666]
]).addTo(map);

/*theBridge.bindPopup('TheBridge');
neoland.bindPopup('Neoland');
upgradeHub.bindPopup('UpgradeHub');
ironHack.bindPopup('IronHack');
adalab.bindPopup('Adalab');
keepcoding.bindPopup('Keepcoding');*/





const bootCamps = L.marker([40.421558, -3.692666], {icon: bridgeIcon}).addTo(map);
L.marker([40.392592, -3.698315], {icon: ironHackIcon}).addTo(map);
L.marker([40.413272, -3.718223], {icon: adalabIcon}).addTo(map);
L.marker([40.404366, -3.689889], {icon: keepcodingIcon}).addTo(map);
L.marker([40.422332, -3.714069], {icon: neolandIcon}).addTo(map);
L.marker([40.458950, -3.694684], {icon: upgradeHubIcon}).addTo(map);




L.layerGroup([bridgee,ironhackk,adalabb,keepcodingg,neolandd,upgradeHubb]);   

