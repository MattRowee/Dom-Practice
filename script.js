alert("Arathkone, Powhatan origin of Racoon");
console.log("Baa baa, black philip");

// The DOM
// When a web page is loaded, the browser creates a Document Object Model of the page. The DOM allows JavaScript to access and alter your HTML in the browser.

// 3 ways to write to the Direct Object Model (DOM)

// 1: create an element or div in HTML. Use a corresponding variable and target it with the document.querySelector("#....") command. Assign that corresponding variables .innerHTML with a string.
var headingElement = document.querySelector("#main-heading");
headingElement.innerHTML = "Which will collapse first, ecology or economy?";
//2: create an element or div in HTML. Create a corresponding object or variable. Create another html based variable to html layouts/stylings with string template literals [${....}]targeting the pieces of our corresponding object. Use document.querySelector to target the html element/div, and link its innerhtml to the html based variable we created for layouts.
var currentSpell = {
    name: "Frost Dart level 4",
    description: "Conjures a sharp icicle",
    manaCost: 8
}

var htmlString = `
    <h3 class="spell-name">${currentSpell.name}<h/3>
    <p class="spell-description">
        ${currentSpell.description}
    </p>
    <h5 class= "spell-price">${currentSpell.manaCost}<h5/>
`
document.querySelector("#daily-spell").innerHTML = htmlString;
//3: create an element or div in HTML. Use the stylings in html to style pieces of our html page different: <section> <h1 id="title">, <h2 id="genre">, </section> etc. Create a corresponding object or variable. Create other objects that document.querySelector the pieces of your corresponding variable, linking them to the html element stylings.
var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
}

var titleContainer = document.querySelector("#title");
var genreContainer = document.querySelector("#genre");
var releaseContainer = document.querySelector("#release-date");

titleContainer.innerHTML = movieObject.title;
genreContainer.innerHTML = movieObject.genre;
releaseContainer.innerHTML =movieObject.releaseDate;
// 2. Challenge: Movie Schedule
// You've been hired to build an app for a movie theater. You need to list all of the movies that are currently playing.

// Start with some basic HTML:

// <body>
//   <div id="movie-schedule"></div>
// </body>
// In your JavaScript file, copy and paste the following array of objects:

var movieSchedule = [
  {
    title: "Ralph Breaks the Internet",
    rating: "PG",
    poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
  }, 
  {
    title: "The Grinch",
    rating: "G",
    poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
  },
  {
    title: "Fantastic Beasts: The Crimes of Grindlewald",
    rating: "PG-13",
    poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
  }
]

var movieString = `
    <h3>${movieSchedule[0].title}</h3>
    <p>${movieSchedule[0].rating}</h3}
    <img class="poster-image" src=${movieSchedule[0].poster} alt="Poster broken"/>
`
document.querySelector("#movie-schedule").innerHTML = movieString;  
// In your JavaScript file, use the movieSchedule data to build up an HTML string like the one in the "daily special" example above.
// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.
// (Hint: if you want to take advantage of VS Code's autocomplete features, you can type most of this in your HTML document and then cut and paste it into your JavaScript file.)
// Use document.querySelector to select the element in your HTML file with an id of "movie-schedule"
// Use the .innerHTML property to set the contents of the "movie-schedule" container equal to the HTML string you just created.