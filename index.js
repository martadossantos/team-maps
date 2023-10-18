var map = L.map('map', { zoomControl:false, worldCopyJump: true }).setView([24.71, 46.6], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: 2,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let teamCircle = {
    color: 'white',
    fillColor: '#fff',
    fillOpacity: 1,
    radius: 500
}

let officeCircle = {
    color: 'green',
    fillColor: '#7bdcb5',
    fillOpacity: 1,
    radius: 500
}

let soonCircle = {
    color: 'blue',
    fillColor: '#0000F5',
    fillOpacity: 1,
    radius: 500
}

// TEAM
let berlin = L.circle([52.508, 13.405], teamCircle).addTo(map);
let brussels = L.circle([50.854, 4.359], teamCircle).addTo(map);
let budapest = L.circle([47.507, 19.053], teamCircle).addTo(map);
let edinburgh = L.circle([55.959, -3.179], teamCircle).addTo(map);
let helsinki = L.circle([60.173, 25.002], teamCircle).addTo(map);
let helsinborg = L.circle([56.052, 12.691], teamCircle).addTo(map);
let istanbul = L.circle([41.044, 28.991], teamCircle).addTo(map);
let porto = L.circle([41.160, -8.625], teamCircle).addTo(map);
let sanFran = L.circle([37.774, -122.419], teamCircle).addTo(map);
let taipei = L.circle([25.031, 121.534], teamCircle).addTo(map);
let warsaw = L.circle([52.243, 21.022], teamCircle).addTo(map);
let washington = L.circle([38.893, -77.027], teamCircle).addTo(map);
let windhoek = L.circle([-22.565, 17.071], teamCircle).addTo(map);

// OFFICES
let london = L.circle([51.507, -0.127], officeCircle).addTo(map);
let luzern = L.circle([47.053, 8.291], officeCircle).addTo(map);
let dubai = L.circle([25.239, 55.279], officeCircle).addTo(map);

// COMING SOON
let riyadh = L.circle([24.713, 46.675], soonCircle).addTo(map);



