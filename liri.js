require("dotenv").config()


let Spotify = require('node-spotify-api')
let request = require('request')
let moment = require('moment')
let keys = require('./keys')
let spotify = new Spotify(keys.spotify)
let fs = require('fs')

const inputs = process.argv
let term = inputs.slice(3).join('+')

function bandsInTown() {
    if (term === '') {
        search = 'The+Sign+by+Ace+of+Base'
    } else {
        search = term
    }
    
}

function spotifySearch() {
    if (term === '') {
        search = 'The+Sign+by+Ace+of+Base'
	} else {
		search = term
    }
    spotify.search({ type: 'track', query: search}, function(error, data) {
        let songInfo = data.tracks.items[0]
        let info = 
            'Song Information:\n' + 
            'Song Name: ' + songInfo.name + '\n'+ 
            'Artist: ' + songInfo.artists[0].name + '\n' + 
            'Album: ' + songInfo.album.name + '\n' + 
            'Preview Here: ' + songInfo.preview_url + '\n';

        fs.appendFile('./log.txt', 'node liri.js spotify-this-song ' + term, (err) => {
            if (err) throw err;
        });
        fs.appendFile('./log.txt', 'LIRI Response:\n\n' + info, (err) => {
            if (err) throw err;
        });
        console.log(info);
    })
}

function movie() {
    let search;
	if (term === '') {
        search = 'Mr+Nobody';
	} else {
        search = term;
	}
	let queryStr = 'http://www.omdbapi.com/?apikey=trilogy&t=' + search + '&plot=full&tomatoes=true';
    
	request(queryStr, function (error, response, body) {
        let data = JSON.parse(body);
        let output =
        'Movie Information:\n' + 
        'Movie Title: ' + data.Title + '\n' + 
        'Year Released: ' + data.Released + '\n' +
        'IMBD Rating: ' + data.imdbRating + '\n' +
        'Rotten Tomatoes Rating: ' + data.tomatoRating + '\n' +
        'Country Produced: ' + data.Country + '\n' +
        'Language: ' + data.Language + '\n' +
        'Plot: ' + data.Plot + '\n' +
        'Actors: ' + data.Actors + '\n'

        fs.appendFile('./log.txt', 'User Command: node liri.js movie-this ' + search + '\n\n', (err) => {
            if (err) throw err;
        });
        fs.appendFile('./log.txt', 'LIRI Response:\n\n' + output + '\n', (err) => {
            if (err) throw err;
            console.log(output);
        });
	})
}

function doWhatItSays() {
    fs.readFile('./random.txt', 'utf8', function(error, data) {
        let cmdString = data.split(',')
        let command = cmdString[0].trim()
        term = cmdString[1].trim()
        if (command === `concert-this`) {
            bandsInTown()
        }
        
        if (command === `spotify-this-song`) {
            spotifySearch()
        }
        
        if (command === `movie-this`) {
            movie()
        }
    })
}

if (inputs[2] === `concert-this`) {
    bandsInTown()
}

if (inputs[2] === `spotify-this-song`) {
	spotifySearch()
}

if (inputs[2] === `movie-this`) {
	movie()
}

if (inputs[2] === `do-what-it-says`) {
    doWhatItSays()
}

