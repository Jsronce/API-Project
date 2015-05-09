


AppControllers.controller('UploadController', ['$scope', '$http', "$location", '$routeParams', function ($scope, $http, $location, $routeParams){ 
	var currentLinks = [];
	if(!(localStorage.getItem("links") === null)){
		currentLinks.push(localStorage.getItem("links"))
	}
	$scope.currentLinks = currentLinks;
	$scope.upload = function(){
	var picture = document.getElementById("file").files[0];
	var fileReader = new FileReader();

	fileReader.onload = function(fileLoadedEvent) {
		var srcData = fileLoadedEvent.target.result; 

		var newImage = document.createElement('img');
		newImage.src = srcData;
		
		
		var request = {
			method: 'POST',
			url: 'https://api.imgur.com/3/image',
			headers: {
				Authorization: 'Client-ID c2d46d060a1041c'
			},
			data: {
				image: newImage.src.split(',')[1]
				}}

		$http(request).success(function(data) {
			var link = document.createElement('a');
			console.log(data.data);
			link.href = data.data.link;
			link.innerHTML = "Here is a link to your Image"
			var responseText = document.createElement('h3');
			var nimg = document.createElement('img');
			nimg.src = data.data.link;
			responseText.innerHTML = "This is what your Image looks like. " + link.outerHTML;
			div = document.getElementById("dummy");
			document.getElementById("dummy").appendChild(responseText);
			div.appendChild(nimg);
			currentLinks = localStorage.getItem("links")
			if(currentLinks === null){
				localStorage.setItem("links",data.data.link);
			}
			else{
				currentLinks = currentLinks.push(data.data.link)
				localStorage.setItem("links", currentLinks);
			$scope.currentLinks = currentLinks;
			}
	//console.log(videos)

	//console.log($scope.response)
	});
        }
		fileReader.readAsDataURL(picture);
	}
	
}]);




