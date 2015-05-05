

var AppControllers = angular.module('AppControllers', [])

AppControllers.controller('ImgurController', ['$scope', '$http', function ($scope, $http) {
	
	$scope.search = function(tag){
		var searchTerm = tag
		var request = {
			method: 'GET',
			url: 'https://api.imgur.com/3/gallery/t/'+searchTerm,
			headers: {
				Authorization: 'Client-ID c2d46d060a1041c'
		}}
		$http(request).success(function(data) {
		console.log(data.data.items[0].link)
		var videos = []
		var temp
		for(var i = 0; i <data.data.items.length; i++){
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
	}
}]);




