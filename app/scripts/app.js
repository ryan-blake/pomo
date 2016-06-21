(function() {
    function config($stateProvider, $locationProvider) {
       $locationProvider
         .html5Mode({
           enabled: true,
           requireBase: false
         });

       $stateProvider
         .state('landing', {
           url: '/',
           controller: 'HomeCtrl as home',
           templateUrl: '/templates/home.html'
         });
    }

    angular
        .module('pomoApp', ['ui.router', 'firebase'])
        .config(config);
})();
