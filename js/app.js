'use strict';

var username = prompt('Hello and welcome to Chris Cummings\' site. What is your name?');
var gameConfirm = confirm('Hello ' + username + ', would you like to play a guessing game?');
console.log('The user name: ' + username);

if (gameConfirm){
  var correctAnswers = 0; //number of correct answers

  function getQ1() {
    var q1 = prompt('Is it true that I\'ve lived in Hawaii? (y/n)');
    if ((q1.toLowerCase()).charAt(0) === 'y'){
      alert('Correct! I lived there for a couple of years. Mahalo for taking this quiz!');
      console.log('Question 1 Correct Answer: ' + q1);
      correctAnswers++;
    }
    else {
      alert('Incorrect! I lived in Hawaii for a couple of years!');
      console.log('Question 1 Incorrect Answer: ' + q1);
    }
  }
  
  getQ1();

  function getQ2() {
    var q2 = prompt('Is my favorite sport football? (y/n)');
    if ((q2.toLowerCase()).charAt(0) === 'n'){
      alert('Correct! My favorite sport is actually tennis!');
      correctAnswers++;
      console.log('Question 2 Correct Answer: ' + q2);
    }
    else {
      alert('Incorrect! My favorite sport is actually tennis!');
      console.log('Question 2 Incorrect Answer: ' + q2);
    }
  }

  getQ2();

  function getQ3() {
    var q3 = prompt('Do I love beer?');
    if ((q3.toLowerCase()).charAt(0) === 'y'){
      alert('Correct! I can\'t help it if it tastes so good.');
      console.log('Question 3 Correct Answer: ' + q3);
      correctAnswers++;
    }
    else {
      alert('Incorrect! How could I hate something so delicious?');
      console.log('Question 3 Incorrect Answer: ' + q3);
    }
  }

  getQ3();

  function getQ4() {
    var q4 = prompt('Have I ever been stung by a bee? (y/n)');
    if ((q4.toLowerCase()).charAt(0) === 'n'){
      alert('Correct! Knock on wood.');
      console.log('Question 4 Correct Answer: ' + q4);
      correctAnswers++;
    }
    else {
      alert('Incorrect! Bees love me! (Please don\'t sting me)');
      console.log('Question 4 Incorrect Answer: ' + q4);
    }
  }

  getQ4();

  function getQ5() { 
    var q5 = prompt('Have I ever played hockey?');
    if ((q5.toLowerCase()).charAt(0) === 'n'){
      alert('Correct! I have never played but hockey games are fun!');
      console.log('Question 5 Correct Answer: ' + q5);
      correctAnswers++;
    }
    else {
      alert('Incorrect! I have never played but hockey games are fun to watch!');
      console.log('Question 5 Incorrect Answer: ' + q5);
    }
  }

  getQ5();

  // start of type in answers
  function getQ6() {
    for (var i = 1; i <= 4; i++){
      var q6 = prompt('How old was I when I first used a computer mouse? (You have 4 tries!)');
      if (parseInt(q6) === 2){
        alert('Correct! I\'ve been on the computer for way too long!');
        console.log('Question 6 Correct Answer: ' + q6);
        correctAnswers++;
        break;
      }
      else {
        if (q6 < 2){
          alert('Try again! This is try number ' + i + '. Try guessing higher!');
          console.log('Question 6 Incorrect Answer Attempt ' + i + ': ' + q6);
        }
        else {
          alert('Try again! This is try number ' + i + '. Try guessing lower!');
          console.log('Question 6 Incorrect Answer Attempt ' + i + ': ' + q6);
        }
      }
    }
  }

  getQ6();

  function getQ7() {
  var q7Correct = false;
    for (var j = 1; j <= 6  && q7Correct === false; j++){
      var q7 = prompt('What cities have I lived in? (You have 6 tries!)');

      var livedCities = ['seattle', 'honolulu', 'mill creek', 'spokane'];

      for (var k = 0; k <= 3; k++){
        if(livedCities[k] === q7.toLowerCase()){
          livedCities.splice(k, 1);
          alert('Correct! I have also lived in ' + livedCities);
          q7Correct = true;
          correctAnswers++;
          break;
        }
      }


      if (j === 6){
        alert('Nice try! The correct answers were: Honolulu, Mill Creek, Spokane and Seattle!');
      }
      else if (q7Correct === false) {
        alert('Incorrect! Try again!');
      }
    }
  }

  getQ7();

  alert('Thanks for taking my quiz, ' + username + '! Your score was ' + correctAnswers + ' out of 7! Enjoy my page!');
  }
else {
  alert('Sounds good! Welcome to my page ' + username + ' !');
}
