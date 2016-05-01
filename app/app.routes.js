angular
  .module('nasa')
  .config(config)

config.$inject = ['$routeProvider']

function config($routeProvider) {
  $routeProvider
    .when('/rovers', {
      templateUrl: 'rovers/rovers.partial.html',
      controller: 'roversController as rovers'
    })
    .otherwise({redirectTo: '/rovers'})
}
