angular.module('starter.controllers', [])

.controller('HomeCtrl', function($rootScope, $http, $scope, $window,$window,$location) {
	$scope.signIn = function() {
		alert("spartacussss");
//		navigator.geolocation.getCurrentPosition(function(pos) {
//			var latitude=pos.coords.latitude;
//			var longitude=pos.coords.longitude;
	
			var latitude="30.345";
			var longitude="76.004";
			
         $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&lang=en&mode=json&cnt=1&lat="+latitude+"&lon="+longitude+"&mode=json").success(function (res) {
//		    	alert(JSON.stringify(res));
		    	
//		          if(res.cod == 200) //found the city
//		          {
//		        	  alert("Spartacus");
		        	  var todaylist=$scope.todaylist=res.list;
		        	  var weather = $scope.weather = res.list[0].weather[0].main;
		        	  var city=$scope.city = res.city.name;
		        	  var descrption=$scope.description=res.list[0].weather[0].description;
		        	  var minTem=res.list[0].temp.min;
		        	  var maxTem=res.list[0].temp.max;
		        	  var imageIcon=res.list[0].weather[0].icon;
//		        	  alert(" Weather: "+weather+"\n City: "+city+"\n Description: "+descrption+"\n Min Temprature: "+minTem+" \n Max Temprature: "+maxTem);  
//		        	  alert("http://openweathermap.org/img/w/"+imageIcon+".png");
		        	  $scope.icon="http://openweathermap.org/img/w/"+imageIcon+".png";
		        	
////		        	  $window.location.href = '#/room.html';
//		        	  window.href('/templates/room.html');
//		        	  $window.location.href = '/templates/room';
		        	  
//		          }else{
//		        	  alert("No any city found");
//		          }
		    	
		    	
		    }).error(function (error) {
		    	alert("Error Server : ");             
		    });
//      });
		
	}
})
.controller('MapController', function($scope, $ionicLoading, $compile) {
  $scope.initialize = function() {
    var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
    
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);


    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
  }
  //google.maps.event.addDomListener(window, 'load', initialize);
 

 
})

.controller('RoomCtrl', function($rootScope, $http, $scope, $window) {
//          $scope.signup=function(user){
        	  alert("Spartacus");
//          }
})

.controller('signupDetailCtrl', function($rootScope, $http, $scope, $window) {
//          $scope.signup=function(user){
//        	  alert("Spartacus");
//          }
})
.controller('SignInCtrl', function($rootScope, $http, $scope, $window) {
 
//	$scope.signIn = function() {
//		alert("spartacussss");
//		navigator.geolocation.getCurrentPosition(function(pos) {
//			var latitude=pos.coords.latitude;
//			var longitude=pos.coords.longitude;
	
			var latitude="30.73";
			var longitude="76.79";
			
			
         $http.get("http://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&mode=json&cnt=1&lat="+latitude+"&lon="+longitude+"&mode=json").success(function (res) {
//		    	alert(JSON.stringify(res));
		    	
//		          if(res.cod == 200) //found the city
//		          {
		        	  var imageIcon=res.weather[0].icon;
		        	  var todaylist=$scope.todaylist=res;
		        	  $scope.icon="http://openweathermap.org/img/w/"+imageIcon+".png";
		        	  
		        	  var sunriseTime = new Date(res.sys.sunrise*1000);
		        	  var sunset = new Date(res.sys.sunset*1000);
		  	  	  
		  	  	  $scope.sunrise=sunriseTime.getHours()+":"+sunriseTime.getMinutes();
		  	  	$scope.sunset=sunset.getHours()+":"+sunset.getMinutes();
//		          }else{
//		        	  alert("No any city found");
//		          }
		    	
		    	
		    }).error(function (error) {
		    	alert("Error Server : ");             
		    });
//      });
		
//	}
	
})
.controller('SignUpCtrl', function($rootScope, $http, $scope, $window) {
//      		navigator.geolocation.getCurrentPosition(function(pos) {
//  			var latitude=pos.coords.latitude;
//  			var longitude=pos.coords.longitude;
  	
	var latitude="30.73";
	var longitude="76.79";
  			
  			$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&lang=en&cnt=10&mode=json&mode=json&lat="+latitude+"&lon="+longitude+"&mode=json").success(function (res) {
  		    	var weatherList=$scope.weatherList=res.list;
  		    	var datelist=$scope.datelist=[];
  		    	for (var i = 0; i < weatherList.length; i++) {
  		    		var time=weatherList[i].dt;
  		    		var date = new Date(time*1000);
  		    		date.toString("MMM dd");
  		    		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  	                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  		    		datelist.push(date.getDate()+" "+months[date.getMonth()]);
		         }
  		    	
  		    }).error(function (error) {
  		    	alert("Error Server : ");             
  		    });
//        });
})
