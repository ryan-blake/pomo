(function() {
  function LandingCtrl(Timer, $scope) {
    var vm = this;
    vm.heroTitle = "Bloctime!";
    vm.timer = Timer;
    $scope.$watch('landing.timer.timeLeft', function(newVal,oldVal) {
      console.log(newVal, oldVal)
      if (newVal === 1){
        console.log('got here');
        console.log(Timer.mySound);
        Timer.mySound.play();
      }
    });
  }

  angular
    .module('pomoApp')
    .controller('HomeCtrl', ['Timer', '$scope', HomeCtrl]);
})();
