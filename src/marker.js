const mapboxgl = require("mapbox-gl");


const activityImg = "http://i.imgur.com/WbMOfMl.png";
const hotel = "http://i.imgur.com/D9574Cu.png";
const rest = "http://i.imgur.com/cqR6pUI.png";


function createDomEl(type) {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (type === "activity") {
    markerDomEl.style.backgroundImage = `url${activityImg}`;
  }
  if (type === "hotel") {
    markerDomEl.style.backgroundImage = `url${hotel}`;
  }
  if (type === "restaurant") {
    markerDomEl.style.backgroundImage = `url${rest}`;
  }
  return markerDomEl;
}


function buildMarker(type, lat, long) {
  const value = createDomEl(type);
  return new mapboxgl.Marker(value).setLngLat([long, lat]).addTo(map);
}


module.exports = buildMarker;
