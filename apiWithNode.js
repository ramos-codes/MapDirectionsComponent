const axios = require("axios");
const polyline = require("@mapbox/polyline");

const getDirections = async () => {
  const newDirectionsData = await axios.get(
    "/directions/json?origin=Expres Toll Route, Vaughan, ON, Canada&destination=10036 Hurontario St, Brampton, ON, Canada&key=AIzaSyBfqU2WVY1eKq2lBUGCPamoV2qw8gxhQZU"
  );

  const directionsData = {
    ...newDirectionsData.data,
    polylinePoints: polyline.decode(
      newDirectionsData.data.routes[0].overview_polyline.points
    ),
  };
  console.log(directionsData);
};

export default getDirections;
