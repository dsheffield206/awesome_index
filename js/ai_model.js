// Calculating Programmers Awesome Index using vanilla JS

'use strict';

// create People array
var peopleArray = [
  { name: 'Trinity',
    occupation: 'programmer',
    awesomeIndex: 10, },
  { name: 'Mater',
    occupation: 'tow truck',
    awesomeIndex: null, },
  { name: 'Number 5',
    occupation: 'programmer',
    awesomeIndex: 7, },
  { name: 'Alice',
    occupation: 'programmer',
    awesomeIndex: 9, },
  { name: 'Zaphod',
    occupation: 'President of the Galaxy',
    awesomeIndex: null, },
  { name: 'Bob Parr',
    occupation: 'programmer',
    awesomeIndex: 6, },
];

// calculate average Awesome Index
var aiAverage = function(){
  var total = 0;
  for(var i = 0; i < peopleArray.length; i++){
    total += peopleArray[i].awesomeIndex;
    console.log(total);
  }
  var avgX = total / peopleArray.length;
  console.log(avgX);
  var getAverage = document.getElementById('awesome-index');
  getAverage.innerHTML = avgX;
};

var getButton = document.getElementById('avgButton');
    getButton.addEventListener('click', function(){
      aiAverage(peopleArray);
});
