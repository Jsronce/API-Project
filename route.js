var ImgurApp = angular.module('ImgurApp', ['ngRoute', 'AppControllers']);

ImgurApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/:desktop?', {
				templateUrl: 'partial1.html',
				controller: 'DefaultController'
			}).
			otherwise({
				templateUrl: 'partial1.html',
				controller: 'DefaultController'
			});
	}]);
	
	ImgurApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);


	ImgurApp.filter('pathSplit', [ function() {
        return function(path) {
			return [path.split('&')[0], path.split('&')[1]];
		}
}]);