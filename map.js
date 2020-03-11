const OPEN_STREET_MAPS = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const madrizCoordinates = L.latLng(40.4233873,-3.6927541,15)

const zoom = 14

const map = L.map('map')

map.setView(madrizCoordinates, zoom)

L.tileLayer(OPEN_STREET_MAPS).addTo(map)


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

const zonacero = L.polygon([
    [40.422332, -3.714069],
    [40.458950, -3.694684],
    [40.413272, -3.718223],
    [40.392592, -3.698315],
    [40.404366, -3.689889],
    [40.421558, -3.692666]
]).addTo(map);

const theBridgepop = L.popup()
    .setLatLng([40.421558, -3.692666])
    .setContent("TheBridge")
    .openOn(map);

const neolandpop = L.popup()
    .setLatLng([40.422332, -3.714069])
    .setContent("NEOland")
    .openOn(map);

const upgradeHubpop = L.popup()
    .setLatLng([40.458950, -3.694684])
    .setContent("UpgradeHub")
    .openOn(map);

const adalabpop = L.popup()
    .setLatLng([40.413272, -3.718223])
    .setContent("Adalab")
    .openOn(map);

const ironHackpop = L.popup()
    .setLatLng([40.392592, -3.698315])
    .setContent("IronHack")
    .openOn(map);

const keepcodingpop = L.popup()
    .setLatLng([40.404366, -3.689889])
    .setContent("Keepcoding")
    .openOn(map);*/

    