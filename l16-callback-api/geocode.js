const request = require("postman-request");
const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoibm9ydWxzaGFobGFtIiwiYSI6ImNrbXlvdDB4YjA1eXkydm1mbGx2OThwbXYifQ.b3OjSSp1B_p17WJBW7u3BA`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("network not connected", undefined);
    } else if (response.body.features.length === 0) {
      callback("results not found", undefined);
    } else {
      callback(undefined, {
        lat: response.body.features[0].center[1],
        long: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
