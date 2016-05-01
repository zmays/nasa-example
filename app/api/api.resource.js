angular
  .module('api')
  .factory('apiResource', apiResource)

apiResource.$inject = ['$resource']

function apiResource($resource) {
  return $resource('api', {}, {})
}
