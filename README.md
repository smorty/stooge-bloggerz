stooge-bloggerz
========

Practice with Yeoman/angular-generator and Angular Services

##Step 1: Build the scaffold
* Make sure Yeoman is installed `npm install -g yo`
* Install angular-generator `npm install -g generator-angular`. Remember, Yeoman uses generators to build certain types of projects. If we want to build an Angular project, we need the Angular Generator.
* Create the project. `yo angular stooge-bloggerz`
  * Follow the prompts (No SASS/Compass, Yes Bootstrap, no other Angular modules)
* Run `grunt serve` to see your new project in action!
(Try running `grunt test` to get an idea of how testing works with Angular. There's not much there now, but soon we'll dive more into this.)

##Step 2: Structure the HTML
* You can see where the HTML is included in the app by looking at the index.html file inside the app/ directory. Look at the line that has the `ng-include` to get a clue as to where to find the HTML for this project.
* Change the nav to have `<li>` elements for each of our bloggers, "Larry," "Curly," and "Moe." (When you save the file, if `grunt serve` is still running you'll see the changes automatically refresh in the browser. Slick, no?)
* Take out the jumbotron div, the row marketing div, and the footer. (You should only have the header now)
* Add a div with class "blog" that contains a header, "Latest Posts"

##Step 3: Add the Blog Controller
* Let's add a blog controller to our app. Yeoman makes this ridiculously easy. `yo angular:controller blog`. Check out the files that were made, and notice that the new file is already included in your index.html.
* Open up the newly created blog.js in your controller directory, and add a var to your $scope called blogPosts, that contains the following data:

```javascript
[
  { title: 'Moe says...', body: '"Why I oughta..."', author: 'Moe'},
  { title: 'Curly says...', body: '"Nyuk Nyuk Nyuk!"', author: 'Curly'},
  { title: 'Moe says...', body: '"You nitwit!"', author: 'Moe'},
  { title: 'Larry says...', body: '"What\'s the idea?"', author: 'Larry'}
]
```
* Wrap the entire main.html with a div that references your Blog Controller.
* Add a div ng-repeat that shows the blog title, body, and author for each post.

##Step 4: Refactor the data into a new Blog Service
* Let's make a service that's concerned with our blog data. Use Yeoman to make a new angular service, blog. `yo angular:service blog`
* Edit your blog service, and have it return an object that contains the function `getPosts`, which returns the data we had in the blog controller.

##Step 5: Add an Author Service
* Follow the same instructions for the last step to create an "Author" service.
* Have the Author service return an object with a `getAuthors` method, which returns an array of our authors
* Implement the author service in the HTML nav to show all of the authors from the service.

##Step 6: Black Diamond
* Add a filter for the posts that will allow us to filter by author
* Have the authors in the nav automatically change the filter on click (hint: use a function in the controller that manipulates the filter based on a passed parameter)
* Include another li element for "All" authors that clears the filter so all posts are shown
