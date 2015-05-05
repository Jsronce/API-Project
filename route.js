var ImgurApp = angular.module('ImgurApp', ['ngRoute', 'AppControllers']);

ImgurApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/:desktop?', {
				templateUrl: 'partial1.html',
				controller: 'ImgurController'
			}).
			otherwise({
				templateUrl: 'partial1.html',
				controller: 'ImgurController'
			});
	}]);
	
	ImgurApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);