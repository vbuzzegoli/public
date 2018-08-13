# iTunes Explorer

Code challenge realized by Victor Buzzegoli.

## How to run 

- 1. Download this project 

- 2. Make sure `Node.js` and `npm` are installed 
  - Check current versions : `node -v` and `npm -v`
  - If necessary install those using the instructions available here : 
    * https://nodejs.org/en/download/
    * https://www.npmjs.com/get-npm

- 3. In your terminal, navigate to the project folder
  * `cd itunes-explorer` 

- 4. Use one of the following options to install the dependencies and start the app :
  A. Run `./deploy.sh`
  _OR_
  B. Run `npm install`, then run `npm start`

- 5. Access `http://localhost:3000/` in your browser to see the app running

## App Info

### Challenge instructions (As is)

1. Create a github Repo or Click 'Fork' from the top menu and generate your own JSFiddle link. 
Be sure to click 'Update' when your work is done.

2. Create a Search Component for entering an Artist

3. On Search, make an api call to iTunes API to fetch the information about the artist
API URL: https://itunes.apple.com/search?term=${ARTIST_NAME}

4. When the Search button is clicked, make a call to the API and display the list of albums, including the album name and album cover inside #albums-container in a grid. Use any CSS technique you are comfortable with (Note: The API will return a list of albums based on the search result. Use your skills to find out what the iTunes API data structure looks like and extract the relevant data from it).

5. Style the page to the best of the ability to make the UI look clean and presentable

6. Checkin or Click Update from the top Menu and save the link


### Technologies used 

Languages : 
- _Javascript (ES6, JSX)_
- _CSS 3_
- _HTML 5_ 

Frameworks :
- _React.js_ (UI - DOM/VirtualDOM Management)
- _Redux.js_ (State Management)
- _Axios.js_ (REST)
- _SASS_ (CSS Preprocessing) 
- _Bootstrap_ (CSS only - no unsafe DOM manipulation)
- _jQuery_ (CSS Animations only - no unsafe DOM manipulation)
- _React CSS Transition Group_ (CSS Animations)

Running using Node.js

### Manual

#### Enable console debug 

To enable the debug in your browsers console, in `meta.js` :
	* Set `debug: true` 

#### Disable console debug 

To disable the debug in your browsers console, in `meta.js` :
	* Set `debug: false` 


### iTunes API

https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

### Author

Victor Buzzegoli

### Version

1.0.0

### License

All Rights Reserved