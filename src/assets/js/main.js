var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js")

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN"
var map = new mapboxgl.Map({
  container: "pk.eyJ1IjoiaGFyZWluZmVybm8iLCJhIjoiY2tnbGFhbGk2MDB4aTJ5bnVhaWhkdWxwbSJ9.H-4AVylWWGLlgtz89ll1Aw",
  style: "mapbox://styles/mapbox/streets-v11",
})