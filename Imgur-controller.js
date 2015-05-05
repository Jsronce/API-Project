

var AppControllers = angular.module('AppControllers', [])

AppControllers.controller('ImgurController', ['$scope', '$http', "$location", function ($scope, $http, $location) {
	$scope.search = function(tag){
		if(tag != ''){
			$location.path(tag)
		}
		if($location.path() != ""){
			var searchTerm = $location.path()
			var request = {
				method: 'GET',
				url: 'https://api.imgur.com/3/gallery/t'+searchTerm,
				headers: {
					Authorization: 'Client-ID c2d46d060a1041c'
			}}
			$http(request).success(function(data) {$scope.data = data});
			data = $scope.data
			var videos = [];
			var temp;
			var count = 1;
			for(var i = 0;1; i++){
				if(i>=data.data.items.length){
					request.url = 'https://api.imgur.com/3/gallery/t'+searchTerm + '/' +(count+1)
					$http(request).success(function(data) {scope.data = data}).error(function(data, status){$scope.status = status});
					if(status == "404"){break}
					i = 0;
				}
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
	}}

	$scope.search('')
}]);




