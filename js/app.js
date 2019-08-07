'use strict';

var username = prompt('Hello and welcome to Chris Cummings\' site. What is your name?');
var gameConfirm = confirm('Hello ' + username + ', would you like to play a guessing game?');
console.log('The user name: ' + username);

if (gameConfirm){
  alert('You will have three tries for each question before it moves onto the next!');
  for (var i = 1; i <= 3; i++){
    var q1 = prompt('How old was I when I first used a computer mouse?');
    if (parseInt(q1) === 2){
      alert('Correct! I\'ve been on the computer for way too long!');
      console.log('Question 1 Correct Answer: ' + q1);
      break;
    }
    else {
      alert('Try again! This is try number ' + i + '.');
      console.log('Question 1 Incorrect Answer Attempt ' + i + ': ' + q1);
    }
  }
  for (var j = 1; j <= 3; j++){
    var q2 = prompt('Is it true that I\'ve lived in Hawaii? (y/n)');
    if ((q2.toLowerCase()).charAt(0) === 'y'){
      alert('Correct! I lived there for a couple of years. Mahalo for taking this quiz!');
      console.log('Question 1 Correct Answer: ' + q2);
      break;
    }
    else {
      alert('Try again! This is try number ' + j + '.');
      console.log('Question 1 Incorrect Answer Attempt ' + j + ': ' + q2);
    }
  }
  for (var k = 1; k <= 3; k++){
    var q3 = prompt('Is my favorite sport football? (y/n)');
    if ((q3.toLowerCase()).charAt(0) === 'n'){
      alert('Correct! My favorite sport is actually tennis!');
      console.log('Question 1 Correct Answer: ' + q3);
      break;
    }
    else {
      alert('Try again! This is try number ' + k + '.');
      console.log('Question 1 Incorrect Answer Attempt ' + k + ': ' + q3);
    }
  }
  for (var l = 1; l <= 3; l++){
    var q4 = prompt('Do I love beer?');
    if ((q4.toLowerCase()).charAt(0) === 'y'){
      alert('Correct! I can\'t help it if it tastes so good.');
      console.log('Question 1 Correct Answer: ' + q4);
      break;
    }
    else {
      alert('Try again! This is try number ' + l + '.');
      console.log('Question 1 Incorrect Answer Attempt ' + l + ': ' + q4);
    }
  }
  for (var m = 1; m <= 3; m++){
    var q5 = prompt('Have I ever been stung by a bee? (y/n)');
    if ((q5.toLowerCase()).charAt(0) === 'n'){
      alert('Correct! Knock on wood.');
      alert('Thanks for taking my quiz, ' + username + '! Enjoy my page!');
      console.log('Question 1 Correct Answer: ' + q5);
      break;
    }
    else {
      alert('Try again! This is try number ' + m + '.');
      console.log('Question 1 Incorrect Answer Attempt ' + m + ': ' + q5);
    }
  }
}
else {
  alert('Sounds good! Welcome to my page ' + username + ' !');
}