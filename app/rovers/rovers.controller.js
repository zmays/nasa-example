angular
  .module('rovers')
  .controller('roversController', roversController)

roversController.$inject = [
  'roverResource',
  'apiResource',
  'lodash',
  '$log',
]

function roversController(
    roverResource,
    apiResource,
    _,
    $log
) {

  vm = this

  apiResource.query({},
      function(response) { $log.debug('successful api query', response) },
      function(response) { $log.debug('failed api query', response) }
      )

}
