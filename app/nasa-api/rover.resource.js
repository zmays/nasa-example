angular
  .module('nasaApi')
  .factory('roverResource', roverResource)

roverResource.$inject = ['$resource']

function roverResource($resource) {
  return $resource('https://api.nasa.gov/mars-photos/api/v1/rovers',
      {api_key: '5sORWLJhulARvNQfNjW5kO8ydnnkI9GrRZaTeTuM'}, {})
}
