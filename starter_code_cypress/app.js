const express = require('express');
const hbs = require('hbs');

const app = express();

const SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
const clientId = '1c30624cba6742dcb792991caecae571', // TO CHANGE
    clientSecret = '746977b1e77240faa9d0d2411c3e0efe'; // TO CHANGE 

const spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/', (req,res,next) => {
  res.render('home')
})


app.listen(3000, () => {
  console.log("Server listening on port 3000");
})