


AppControllers.controller('MobileController', ['$scope', '$http', "$location", '$routeParams', function ($scope, $http, $location, $routeParams){ 
	$scope.upload = function(){
	var picture = document.getElementById("file").files[0];
	var fileReader = new FileReader();

	fileReader.onload = function(fileLoadedEvent) {
		var srcData = fileLoadedEvent.target.result; 

		var newImage = document.createElement('img');
		newImage.src = srcData;
		var responseText = document.createElement('p');
		responseText.innerHTML = "This is what your Image looks like";
		document.getElementById("dummy").appendChild(responseText);
		document.getElementById("dummy").appendChild(newImage);
//alert("Converted Base64 version is "+document.getElementById("imgTest").innerHTML);
//console.log("Converted Base64 version is "+document.getElementById("imgTest").innerHTML);
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
			div = document.getElementById("dummy");
			div.insertBefore(link, div.childNodes[0]);

	//console.log(videos)

	//console.log($scope.response)
	});
        }
        picToSend = fileReader.readAsDataURL(picture);

	}
}]);




