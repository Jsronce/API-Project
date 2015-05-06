

var AppControllers = angular.module('AppControllers', [])

AppControllers.controller('DefaultController', ['$scope', '$http', "$location", function ($scope, $http, $location) {
	$scope.search = function(parms){
		if(tag != ''){
			$location.path(parms[0]+'&'+parms[1])
		}
		if($location.path() != ""){
			var pathStuff = $location.path().split('&')
			var request = {
				method: 'GET',
				url: 'https://api.imgur.com/3/gallery/t'+pathStuff[0] + '/' + pathStuff[1],
				headers: {
					Authorization: 'Client-ID c2d46d060a1041c'
			}}
			$http(request).success(function(data) {

			var videos = [];
			var temp;
			var count = 1;
			for(var i = 0;i<data.data.items.length; i++){
				temp = data.data.items[i]
				if(!(temp.mp4 === undefined)){
					videos.push(temp)
				}
				if (videos.length > 4){
				break}
			}
			console.log(videos)
			$scope.response = videos;
			console.log($scope.response)
	});
	}}
	$scope.search(['',0])
}]);




