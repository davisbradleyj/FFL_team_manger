# Taqueria

## Description

With this application, the challenge is to design and build a solution that will manage a company's employees utilizing node, inquirer, and MySQL.

## Table of Contents

  * [Technology](#Technology)

  * [Summary](#Summary)

  * [Learning-Points](#Learning-Points)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Installation](#Installation)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - used to add style to the deployed page
- JavaScript - used to create the logic controlling the 
- Bulma - aid in the implementation of syling elements
- jQuery - library supplement to JavaScript controlling application logic
- Node.js - runtime environment which executes the JS code
- Express - framework for Node.js to create a server
- Handlebars - a template language within Express that aids in renders HTML
- MySQL Workbench - database used for storing and calling information on commandline application
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Heroku - host for deployed application

## Summary
I found this task to be a bit more challenging from a technical perspective as I feel like I wrote more pages of code than ever before.  Not that it was a significant deviation from the activities we were introduced to this week, but I wanted to be sure I understood all the routes being developed, and had a 'good' grasp of Model-View-Controller architecture.  Understanding the interplay between control-model-orm as the engine which will drive Sequelize should be critical going forward.  Being said, let's have a look at how the "Get" routes work along the MVC pathways:

`GET" - controller/tacoControl.js`
```
router.get("/", function(req,res){
    taco.all(function(data){
        var hbsObject = {
            tacos: data
        };
        // console.log(hbsObject);
        res.render("index",hbsObject);
    });
});
```
The "taco" variable is a require method pointing to the /models/taco.js file, allowing data to be passed from a callback function within the taco.js file.

`GET - model/taco.js`
```
var taco = {
    all: function(cb) {
        orm.all("tacos", function(res) {
            cb(res);
```
Similar to "taco" above, here the "orm" variable is another require method, pointing to the c/onfig/orm.js file, also allowing information to be called back from the orm.

`GET - config/orm.js`
```
var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
```
This code is the sql query which gets all the database information from the tacos database table, and is called back by the previous function to be populated in the assorted handlebars files which make up the front-end of the the application.

Similarly, the "POST", "UPDATE", and "DELETE" routes follow similar structiure to obtain data from the sql database to render information to the front-end, however, the information being passed through is reliant on the public/js/tacos.js file to allow for the behaviours written into that file to be executed:

```
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("Create new filling click")
      var newTaco = {
        filling: $("#ta").val().trim(),
        cost: $("#co").val().trim(),
        order: $("[name=order]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/tacos", {
        type: "POST",
        data: newTaco
      }).then(
        function() {
          console.log("added a new filling");
          // Reload the page to get the updated list
          location.reload();
```
This example is the code which allows a new taco filling to be created and saved to the application.  In it, you can specify the filling and cost on the page, along with whether you want to immediately order the item or just add it to the menu.  Though, if you want it, and it is not on the menu, you should expect it to be put right into your order.  No sense asking for something that you will not receive, right?  

Let's see this application in action...

<img src="https://github.com/davisbradleyj/taqueria/blob/master/public/Gen-Villa-Taqueria.gif">

## Learning-Points

Callbacks definitely twisted my brain in all sorts of knots, as did attempting to manage the assorted routes and paths being traversed by all the calls and functions that would allow this project to be deployed successfully.  In some of the paired programming lessons, it became a good learning experience (and practice) explaining how all the requests would be passed from control to model to orm, then how the callbacks would be traversed back up the chain.

I encountered some major issues with getting my front-end javascript and styling to render to the page.  On the advice of my tutor, I set my code aside for the night.  Upon starting fresh the next morning, everything seemed to work.  I did not change anything.  Guess the trick of turning off a computer, and restarting worked. Again.

The last bit of challenge was determining why some of the routes were not behaving as expected.  With assistance from Mr. Kerwin Hy and Ms. Mahi Gunasekaran, I was able to remedy these issues.  An overarching theme I have found is that writing code is just like writing anything else... sometimes another set of eyes (acting as an editor or otherwise) can be instrumental in finding those small mistakes one is missing.

Also, I think it is time I invest in a rubber duck.

## License

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

## Contributing

Jerome Chenette, Kerwin Hy, Mahi Gunasekaran, Corbin Brockbank

## Installation

To install necessary dependencies for this application, the following commands are required:

`npm init` - To create the package.json file.

`npm i express mysql express-handlebars` - Adds node modules and populates the package-lock.json file.

For those who wish to clone or fork this repo, the following steps should be followed:

Clone:
1) On GitHub, navigate to the main page of the repository.
2) Under the repository name, click Clone or download.
3) To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the clipboard icon.
4) Open your local Terminal
5) Move into the directory location where you would like the cloned repo to sit.
6) Type `git clone` then paste the URL copied from earlier so that your would see the following - `$ git clone https://github.com/davisbradleyj/taqueria.git`
7) Press enter

Fork:
1) On GitHub, navigate to the main page of the repository.
2) In the top-right corner of the page, click Fork.

For more detailed instructions, you can visit GitHub directly to <a herf="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository">Clone</a> or <a herf="https://help.github.com/en/github/getting-started-with-github/fork-a-repo">Fork</a>

## Tests

No tests were required for this application

## Questions

<img src="https://avatars2.githubusercontent.com/u/61176147?v=4" alt="avatar" style="border-radius: 16px" width="30">

If you have any questions about the repository, open an issue or contact [Brad Davis](https://api.github.com/users/davisbradleyj) directly at davis.bradleyj@gmail.com