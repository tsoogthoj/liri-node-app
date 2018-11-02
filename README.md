# LIRI-NODE-APP

### LIRI - Language Interpretation and Recognition Interface

### Intro
This is my first project using node. This app will get information about a song from Node-Spotify-API, information about a movie from OMDB API, information about bands events from Bands In Town API. Continue reading for information on how to install and use the app.


### Install
Clone or download the repository then run ```npm install``` in the terminal. 
This will install the following packages and their dependencies
- request https://www.npmjs.com/package/request
- moment https://www.npmjs.com/package/moment
- node-spotify-api https://www.npmjs.com/package/node-spotify-api

### Usage
After everything is install, run the following commands. Examples of what should be outputted in the terminal is displayed below. 

##### Command 
```node liri.js concert-this <artist/band name here>```
##### Example
```
node liri.js concert-this Taylor Swift

Name of the venue: ANZ Stadium
Venue location: Sydney Olympic Park,
Date of the Event: November 2nd 2018, 8:00:00 pm
```
##### Command 
```node liri.js spotify-this-song '<song name here>```
##### Example
```
node liri.js concert-this Tears In Heaven

Song Information:
Song Name: Tears In Heaven
Artist: Eric Clapton
Album: Unplugged [Deluxe]
Preview Here: https://p.scdn.co/mp3-preview/6db51a706aa23e959e1f3ee27f26848ec81ff812?cid=c63f28191a4944b1985043b4a253aac4
```
##### Command 
```node liri.js movie-this '<movie name here>```
##### Example
```
node liri.js movie-this The Godfather

Movie Information:
Movie Title: The Godfather
Year Released: 24 Mar 1972
IMBD Rating: 9.2
Rotten Tomatoes Rating: N/A
Country Produced: USA
Language: English, Italian, Latin
Plot: When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.
Actors: Marlon Brando, Al Pacino, James Caan, Richard S. Castellano
```
##### Command 
```node liri.js do-what-it-says```  
This will grab the command from random.txt
##### Example
```
node liri.js do-what-it-says

Song Information:
Song Name: I Want It That Way
Artist: Backstreet Boys
Album: The Hits--Chapter One
Preview Here: https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=c63f28191a4944b1985043b4a253aac4
```
