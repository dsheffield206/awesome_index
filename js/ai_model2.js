// Calculating Programmers Awesome Index using jQuery and Underscore

'use strict';

$(document).ready(function(){

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
  var calcAverage = function(array){
      var total = 0;
      _.map(array, function(val, index){
        total += array[index].awesomeIndex;
        console.log(total);
      });
      var avgY = total / array.length;
      console.log(avgY);
      $('awesome-index').text(avgY);
      };
      $('#avgButton2').click(function(){
        calcAverage(peopleArray);
      });
});
