import request from "request";

const url =
  "http://api.weatherstack.com/current?access_key=abef348bec396fc5a88eb1a7a2166f5f&query=";

const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/Bandung.json?access_token=pk.eyJ1IjoibG9yZHNpZCIsImEiOiJjbDByb3M0Y2cwNWl6M2txZWdlYjU4MWZ5In0.WHwV_BPHCcNC8vtz0-IlBA&limit=1`;

request({ url, json: true }, (err, res) => {
  if (err)
    console.log(`error tidak dapat terhubung Pastikan Internet anda menyala`);
  else if (res.body.error)
    console.log(
      `Harap tentukan pengidentifikasi lokasi yang valid menggunakan parameter kueri.`,
    );
  else console.log(res.body);
});

request({ url: url2, json: true }, (err, res) => {
  if (err)
    console.log(`error tidak dapat terhubung Pastikan Internet anda menyala`);
  else if (res.body.features.length === 0)
    console.log(
      `Harap tentukan pengidentifikasi lokasi yang valid menggunakan parameter kueri.`,
    );
  else console.log(res.body.features);
});

const geoCode = (alamat, cb) => {
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${alamat}.json?access_token=pk.eyJ1IjoibG9yZHNpZCIsImEiOiJjbDByb3M0Y2cwNWl6M2txZWdlYjU4MWZ5In0.WHwV_BPHCcNC8vtz0-IlBA&limit=1`;

  request({ url: url2, json: true }, (err, res) => {
    if (err) cb(`error tidak dapat terhubung Pastikan Internet anda menyala`);
    else if (res.body.features.length === 0)
      cb(
        `Harap tentukan pengidentifikasi lokasi yang valid menggunakan parameter kueri.`,
      );
    else cb(res.body.features);
  });
};

// const addfunction = (one, two, cb) => {
//   setTimeout(() => {
//     let data = one + two;
//     cb(data);
//   }, 2000);
// };

// addfunction(1, 4, (sum) => {
//   console.log(sum);
// });
