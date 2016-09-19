var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

//output is "My name is Keith". The function uses string concat to print the variable string.

score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

//output is 3 - the function variable of score gets higher priority than the 'global' variable so the function outputs 3 instead of 5.

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//output is the second array - myAnimals is redefined within the function.

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

//first output is the functions concat - second console.log output uses Keith instead of Harvey as suspectThree because suspectThree from the function is a function variable and can only be accessed within it.

var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

//output returns the detectiveInfo: Poirot because the console.log only calls the detectiveInfo function and not the printName function.

var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//output returns the murderer as rick - this is because the console.log does not specify a function for murderer so it uses the murderer available as a local variable. also neither function explicitly returns a variable so they cannot be accessed.





