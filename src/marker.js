const mapboxgl = require('mapbox-gl');

const activityImg = 'http://i.imgur.com/WbMOfMl.png';
const hotel = 'http://i.imgur.com/D9574Cu.png';
const rest = 'http://i.imgur.com/cqR6pUI.png';

mapboxgl.accessToken =
  'pk.eyJ1IjoibGludXMxMjMiLCJhIjoiY2s1d29tNW0yMGVhYTNscWI5a3R6bHhrMCJ9.PrVmxg6g-R9CfqDS3miaWA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

function createDomEl(type) {
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  if (type === 'activity') {
    markerDomEl.style.backgroundImage = `url(${activityImg})`;
  }
  if (type === 'hotel') {
    markerDomEl.style.backgroundImage = `url(${hotel})`;
  }
  if (type === 'restaurant') {
    markerDomEl.style.backgroundImage = `url(${rest})`;
  }
  return markerDomEl;
}

function buildMarker(type, long, lat) {
  const value = createDomEl(type);
  return new mapboxgl.Marker(value).setLngLat([long, lat]).addTo(map);
}

module.exports = buildMarker;
