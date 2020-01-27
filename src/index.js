console.log('Hello World!');

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");


mapboxgl.accessToken = "pk.eyJ1IjoibGludXMxMjMiLCJhIjoiY2s1d29tNW0yMGVhYTNscWI5a3R6bHhrMCJ9.PrVmxg6g-R9CfqDS3miaWA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


new mapboxgl.Marker().setLngLat([-74.009151, 40.705086]).addTo(map);
