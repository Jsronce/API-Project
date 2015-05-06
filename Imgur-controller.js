

var AppControllers = angular.module('AppControllers', [])

AppControllers.controller('DefaultController', ['$scope', '$http', "$location", '$routeParams', function ($scope, $http, $location, $routeParams){ 
	
	
	$scope.search = function(tag){
		if(tag != ''){
			$location.path(tag+'&'+0)
	}}
	var pathStuff = $location.path().split('&')
	var request = {
		method: 'GET',
		url: 'https://api.imgur.com/3/gallery/t'+pathStuff[0] + '/' + pathStuff[1],
		headers: {
			Authorization: 'Client-ID c2d46d060a1041c'
			}}
	$scope.next = function(){
		var path = $location.path().split('&')
		$location.path(path[0] + '&' +(parseInt(path[1],10) +1))
	}
	$http(request).success(function(data) {
	$scope.data = data

	var videos = []
	var data = $scope.data;
	var temp;
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
}]);




