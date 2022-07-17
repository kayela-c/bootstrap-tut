


var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyZWluZmVybm8iLCJhIjoiY2tnbGFhbGk2MDB4aTJ5bnVhaWhkdWxwbSJ9.H-4AVylWWGLlgtz89ll1Aw';
var map = new mapboxgl.Map({
  container: '#map',
  style: 'mapbox://styles/mapbox/streets-v11'
});

map.addControl(new mapboxgl.NavigationControl());