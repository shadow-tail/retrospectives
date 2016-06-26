var safetyScores = [];
var finalScores = [];


// Confirms the score selected and displays button to pass the device
var selectScore = function(score) {
  "use strict";
  $('html, body').animate({ scrollTop: "0px" }, 600);
  document.getElementById('message-display').className = 'alert alert-info';
  document.getElementById('message-display').innerHTML = "You have submitted a score of " + score + ".<div><button class='btn btn-default' onclick='newSubmit(" + score + ")'>Pass it on</button></div>";
};


// Saves submitted score and clears div for the next user
var newSubmit = function(score) {
  "use strict";
  safetyScores.push(score);
  finalScores = safetyScores.sort();
  document.getElementById('message-display').className = 'alert alert-warning';
  document.getElementById('message-display').innerHTML = "Select an option";
};


// Displays whether the retrospective should continue or not
var decideProceed = function() {
  "use strict";
  var displayScores = "The lowest score submitted was a " + finalScores[0] + ".";
  var proceedMessage = '';
  if(cancelRetro() && finalScores.length) {
    document.getElementById('message-display').className = 'alert alert-danger';
    proceedMessage = " As there is at least one person who does not feel safe talking, you should cancel the meeting!";
  } else if(finalScores.length) {
    document.getElementById('message-display').className = 'alert alert-success';
    proceedMessage = " Everyone seems comfortable with proceeding!";
  } else {
    displayScores = '';
    proceedMessage = "No votes have been submitted.";
    document.getElementById('message-display').className = 'alert alert-danger';
  }
  document.getElementById('message-display').innerHTML = displayScores + proceedMessage;
};


// Resets scores
var clearScores = function(){
  "use strict";
  safetyScores = [];
  finalScores = [];
  document.getElementById('message-display').className = 'alert alert-warning';
  document.getElementById('message-display').innerHTML = "Select an option";
};


var setFailLevel = {
  // Default score to be overwritten by user input
  1: {
    count: '1',
    percentage: '1'
  },
  2: {
    count: '1',
    percentage: '1'
  },
  3: {
    count: '0',
    percentage: '101'
  },
  4: {
    count: '0',
    percentage: '101'
  },
  5: {
    count: '0',
    percentage: '101'
  }
}

var finalResults = {
  1: {
    count: '',
    percentage: ''
  },
  2: {
    count: '',
    percentage: ''
  },
  3: {
    count: '',
    percentage: ''
  },
  4: {
    count: '',
    percentage: ''
  },
  5: {
    count: '',
    percentage: ''
  }
}
var tallyScores = function() {
  var count = [];
  for(var i = 1; i < finalScores.length-1; i++) {
    count[i-1] = finalScores.reduce(function(n, val){
        return n + (val === i);
    }, 0);
  }
  var finalCount = count.slice(0,5);
  console.log(finalCount);


  for(var i = 0; i < finalCount.length; i++) {
    finalResults[i+1].count = finalCount[i];
    finalResults[i+1].percentage = (100/finalScores.length)*finalCount[i];
    console.log('Count for ' + (i+1) + ' is ' + finalResults[i+1].count);
    console.log('Percentage for ' + (i+1) + ' is ' + finalResults[i+1].percentage + '%');
  }
};


var cancelRetro = function() {
  for(var i=1; i<=5; i++) {
    if(setFailLevel[i].percentage <= finalResults[i].percentage){
      return true;
    }
  }
};
