angular
  .module('rovers')
  .controller('roversController', roversController)

roversController.$inject = [
  'roverResource',
  'lodash',
  '$log',
]

function roversController(
    roverResource,
    _,
    $log
) {

  vm = this

  vm.rovers = roverResource.get({},
      function(response) { $log.debug('successful rover query', response) },
      function(response) { $log.debug('failed rover query', response) }
      )

}
