(function() {
  function Timer($interval, $scope) {
    var Timer = {};

    Timer.timeLeft = 1500;

    Timer.buttonWords = "Start New Session";

    var started = false;

    var onBreak = false;

    var start;

    var numberOfSessionCompleted = 0;

    Timer.mySound = new buzz.sound("/assets/sounds/myfile.mp3", {
      preload: true
    });


    /**
    *
    * @function timeUpdate
    * @desc starts countdown on timer
    */
    var timeUpdate = function(){
      started = true;
      Timer.timeLeft--;
      if (Timer.timeLeft === 0 && !onBreak) {
        if (numberOfSessionCompleted !== 4) {
          Timer.buttonWords = "Take a Break";
          resetBreak();
        } else {
          Timer.buttonWords = "Big Break!";
          reset30MinBreak();
        }
        Timer.buttonWords = "Start New Session";
        resetSession();
      }
    };

    var resetSession = function() {
      $interval.cancel(start);
      started = false;
      onBreak = false;
      Timer.timeLeft = 1500;
      Timer.buttonWords = "Start New Session";
    };

    var resetBreak = function() {
      $interval.cancel(start);
      started = false;
      onBreak = true;
      Timer.timeLeft = 300;
      Timer.buttonWords = "Take a Break";
    };

    var reset30MinBreak = function() {
      $interval.cancel(start);
      started = false;
      onBreak = true;
      Timer.timeLeft = 1800;
      Timer.buttonWords = "Big Break!";
    };

    Timer.startSession = function () {
      if (!started && !onBreak && numberOfSessionCompleted !== 4) {
        Timer.buttonWords = "Reset";
        Timer.timeLeft = 1500;
        numberOfSessionCompleted++;
        start = $interval(timeUpdate, 1000);
      } else if (!started && !onBreak && numberOfSessionCompleted === 4) {
        numberOfSessionCompleted = 0;
        Timer.buttonWords = "Reset";
        Timer.timeLeft = 1500;
        numberOfSessionCompleted++;
        start = $interval(timeUpdate, 1000);
      } else if (started && !onBreak && numberOfSessionCompleted !== 4) {
        resetSession();
      } else if (!started && onBreak && numberOfSessionCompleted !== 4) {
        Timer.buttonWords = "Reset";
        Timer.timeLeft = 300;
        start = $interval(timeUpdate, 1000);
      } else if (started && onBreak && numberOfSessionCompleted !== 4) {
        resetBreak();
      } else if (!started && onBreak && numberOfSessionCompleted === 4) {
        Timer.buttonWords = "Reset";
        Timer.timeLeft = 1800;
        start = $interval(timeUpdate, 1000);
      } else if(started && onBreak && numberOfSessionCompleted === 4) {
        reset30MinBreak();
      }
    };

    return Timer;
  };

  angular
    .module('pomoApp')
    .factory('Timer', ['$interval', Timer]);
})();
