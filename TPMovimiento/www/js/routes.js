angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('principal', {
    url: '/principal',
    templateUrl: 'templates/principal.html',
    controller: 'principalCtrl'
  })

  .state('informacion', {
    url: '/informacion',
    templateUrl: 'templates/informacion.html',
    controller: 'informacionCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});