# DIEHL PROJECT 2 - FULL STACK APPLICATION
## ORGANIZE OUR LEGOS
I created a project to help organize my children's Lego sets. They have many sets and I wanted to start with listing them and in the long run organizing them for resale, as we have bought resold items and been burned. 

## PROJECT LINKS
[Link to project](https://kim-project2.herokuapp.com/)
[Link to github repo](https://github.com/kmac783/project2)

### WIREFRAMES
[Link to Wireframes](https://github.com/kmac783/project2/blob/main/other/Wireframes_Project2.pdf)

I utilized Partials for the Navigation and Footer. And the body of each of the pages were called from the EJS files. 

### PROJECT REQUIREMENTS
* Working Full Stack application, using Node.js, MongoDB, Express, and EJS
* Adhere to MVC Structure
* At least one model w/ 7 RESTful routes and full CRUD
* 2 Models associated
* a public GIT REPO
* At least 1 GITHUB commit per day
* 10 User Stories
* Deployed online and accessible to the public via HEROKU

#### Technologies
As required, the Diehl Lego app utilized Node.js, MongoDB, Express, and EJS, the site also utilized Bootstrap CSS to a small extent.
#### MVC
The site contains two models, Lego Collections and Sets of Legos. These interact in a one-to-many way, as 1 Lego Collection contains many Sets of Legos. 
#### RESTful Routes
[See the RESTful Routes](https://github.com/kmac783/project2/blob/main/other/Project2-Routes.png)

#### User Stories
[User Stories](https://github.com/kmac783/project2/blob/main/other/User%20Stories.jpeg)

### Components
The users will be able to access the site to add the individual Lego sets to the collections of "My Legos", "My Wishlist" and ultimately "My Imagination". The "My Legos" identify which sets they have, if they have all the pieces (indicating a resale potential), and instructions, a theme, their descriptive LEGO number (for easy tracking) and an image from the web for reference. 

### Code Snippet
During the project prep and lessons, I had attempted to replicate the HOME.ejs on the Mongoose Application lesson and could not. But here I was able to create the "home" page for this app. 
<!-- // HOME INDEX
app.get('/', async (req,res)=> {
  // console.log('/');
  // res.send("Find the Legos!");
  let legos = await Lego.find();
  // console.log(`found and populated all collections: ${legos}`);
  // res.send(legos);
  res.render('home.ejs', {legos});
}); -->

#### Issues/Resolutions
I'm not sure there's enough room. Some of the issues were due to lack of focus (single missing pieces of code, etc) but some like working through the complication of the collection of My Lego's, being a one-to-many but also being ultimately a many-to-many. 
One Late issue was that my edit form was feeding properly to my database if I changed or "overwrote" something that was already there. When I tried to edit an item, without filling in all the fields, I ended up overwriting some fields with empty values (because the fields were empty on the form). With some additional eyes, it was perceived that there was missing an equal sign in the EJS code snippets to display the values in the form fields. (The EJS code was there, just not the equal sign which would display the value). While extremely frustrating, it was due to triple checking the route, yet having a new set of eyes to see something different was extremely helpf - would love to see more people stay in the breakouts during projects. 
There were several other moments like this, but I think another one that stood out was pulling in the specific collection sets in the index for "My Legos", this was not something I'd done before, and needed assistance. 

### FUTURE WORK
* Adding a set of Routes for the WishList - I had begun this process but ran into a snag with the "adding" a wishlist item, it kept posting to the My Legos versus the My WishList
* Displaying the items 3 across on the index page - I had started to utilize a Bootstrap template, but because I was using a forEach loop I could not set each "card" and they would set inside each other. 
* Searching within the Collection - Just creating an internal search to find items within the name of the sets. 
* Moving a Set from the WishList into My Legos when purchased. 
