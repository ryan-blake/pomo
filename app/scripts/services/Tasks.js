(function() {
  function Tasks($firebaseArray) {

    var firebaseRef = new Firebase("https://pomo-fd012.firebaseio.com/");

    var tasks = $firebaseArray(firebaseRef);

    return {
      all: tasks
    };
  }

  angular
    .module('pomoApp')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();
