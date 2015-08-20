### Code Fellows Code Challenge - Awesome Index

#### Awesome Index - Assignment
+ Create an HTML page to display the given data. It should use JS to update a
tag with id="awesome-index" with the calculated average awesome-index of all programmers, and optionally dynamically load the data to show in the HTML.
+ Next, add a little CSS, demonstrating properties of the "box model".
+ Your solution should continue to work even if more people are added to the array.
+ Finally: Write two versions, one using only vanilla JS, and one with lodash (or underscore) and jQuery, making maximal use of those libraries.


#### JS Functionality:
+ This is program calculates the avg "awesome-index" of all programmers in the given list.
+ The program uses object contructors to create our initial programmer list.
+ The program uses a render method to update an existing programmer or add a new programmer if they do not yet exist in our table.
+ The program stores the data for the programmers in an Array; so, that it can acess it to check to see if that person exists and to use the data to populate the corresponding table.
+ The program dynamically creates the table and its rows.
