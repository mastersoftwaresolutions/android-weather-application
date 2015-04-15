angular
		.module('starter.controllers', [])

		.controller(
				'HomeCtrl',
				function($rootScope, $http, $scope, $window, $window, $location) {
					$scope.signIn = function() {
						alert("spartacussss");
						// navigator.geolocation.getCurrentPosition(function(pos)
						// {
						// var latitude=pos.coords.latitude;
						// var longitude=pos.coords.longitude;

						var latitude = "30.345";
						var longitude = "76.004";

						$http
								.get(
										"http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&lang=en&mode=json&cnt=1&lat="
												+ latitude
												+ "&lon="
												+ longitude + "&mode=json")
								.success(
										function(res) {
											// alert(JSON.stringify(res));
											// if(res.cod == 200) //found the
											// city
											// {
											// alert("Spartacus");
											var todaylist = $scope.todaylist = res.list;
											var weather = $scope.weather = res.list[0].weather[0].main;
											var city = $scope.city = res.city.name;
											var descrption = $scope.description = res.list[0].weather[0].description;
											var minTem = res.list[0].temp.min;
											var maxTem = res.list[0].temp.max;
											var imageIcon = res.list[0].weather[0].icon;
											// alert(" Weather: "+weather+"\n
											// City: "+city+"\n Description:
											// "+descrption+"\n Min Temprature:
											// "+minTem+" \n Max Temprature:
											// "+maxTem);
											// alert("http://openweathermap.org/img/w/"+imageIcon+".png");
											$scope.icon = "http://openweathermap.org/img/w/"
													+ imageIcon + ".png";
											// // $window.location.href =
											// '#/room.html';
											// window.href('/templates/room.html');
											// $window.location.href =
											// '/templates/room';

											// }else{
											// alert("No any city found");
											// }
										}).error(function(error) {
									alert("Error Server : ");
								});
						// });

					}
				})
		.controller(
				'MapController',
				function($scope,$http,$window, $ionicLoading, $compile,$ionicLoading) {
					$scope.initialize = function() {
						
						 var latitude;
						 var longitude;
						var myLatlng = new google.maps.LatLng(30.444,
								76.435);

						var mapOptions = {
							center : myLatlng,
							 mapTypeId: google.maps.MapTypeId.ROADMAP,
							zoom : 8,
							mapTypeId : google.maps.MapTypeId.ROADMAP
						};
						var map = new google.maps.Map(document
								.getElementById("map"), mapOptions);

						// var marker = new google.maps.Marker({
						// position : myLatlng,
						// map : map,
						// title : 'Uluru (Ayers Rock)'
						// });
						//
						// google.maps.event.addListener(marker, 'click',
						// function() {
						// infowindow.open(map, marker);
						// });
						// Click on Check weather button
						$scope.checkWeather = function(location) {
							  $ionicLoading.show({
							      template: 'Loading...'
							    });
							
							var locationn = location.p;
							
//							alert("weather check: " + locationn);
							$http
									.get(
											"http://api.openweathermap.org/data/2.5/weather?units=metric&q="
													+ locationn + "&mode=json")
									.success(
											function(res) {
//												 alert(JSON.stringify(res));
												
												var mainTemp=res.main.temp;
												var minTemp=res.main.temp_min;
												var maxTemp=res.main.temp_max;
												
												
												var locLat = res.coord.lat;
												var locLong = res.coord.lon;
												var Name=res.name;
												var imageIcon = res.weather[0].icon;
												var mainWeather=res.weather[0].main;
												var description=res.weather[0].description;
												var sunriseTime = new Date(	res.sys.sunrise * 1000).getHours()
												+ ":"
												+ new Date(	res.sys.sunrise * 1000).getMinutes();
												var sunset = new Date(res.sys.sunset * 1000).getHours() + ":"
												+ new Date(res.sys.sunset * 1000).getMinutes();;
												
												
												
												var locatioLatLong = new google.maps.LatLng(locLat,
														locLong);
												 
													var mapOptions = {
															center : locatioLatLong,
															zoom : 12,
															mapTypeId : google.maps.MapTypeId.ROADMAP
														};
														var map = new google.maps.Map(document
																.getElementById("map"), mapOptions);
														
														 //Marker + infowindow + angularjs compiled ng-click
//													    var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
														
														var contentString="<div><img ng-src='http://openweathermap.org/img/w/"+imageIcon+".png'/><label>"+mainTemp+"</label><br/><label>"+mainWeather+" </label><br/><label>Name: </label> "+Name+"<br/><label>Description: </label> "+description+"<br/><label>Sunrise Time: </label> "+sunriseTime+"<br/><label>Sunset Time: </label> "+sunset+"<br/></div>";
													    var compiled = $compile(contentString)($scope);

													    var infowindow = new google.maps.InfoWindow({
													      content: compiled[0]
//													    	content: "City Name: "+Name +"\n Latitude "+locLat+"\n Longitude "+locLong
													    });
														
														 var marker = new google.maps.Marker({
															 position : locatioLatLong,
															 map : map,
															 title : res.name
															 });
														 
														 google.maps.event.addListener(marker, 'click', function() {
														      infowindow.open(map,marker);
														    });
														 $ionicLoading.hide();
															

//										
											}).error(function(error) {
												 $ionicLoading.hide();
										alert("Error Server : ");
									});
						};
						

						$scope.map = map;
					}
					
					
					// google.maps.event.addDomListener(window, 'load',
					// initialize);

				})

		.controller('RoomCtrl', function($rootScope, $http, $scope, $window) {
			// $scope.signup=function(user){
			alert("Spartacus");
			// }
		})

		.controller('signupDetailCtrl',
				function($rootScope, $http, $scope, $window) {
					// $scope.signup=function(user){
					// alert("Spartacus");
					// }
				})
		.controller(
				'SignInCtrl',
				function($rootScope, $http, $scope, $window,$ionicLoading) {
					
					  $ionicLoading.show({
					      template: 'Loading...'
					    });
					// $scope.signIn = function() {
					// alert("spartacussss");
					 navigator.geolocation.getCurrentPosition(function(pos) {
					 var latitude=pos.coords.latitude;
					 var longitude=pos.coords.longitude;

//					var latitude = "30.73";
//					var longitude = "76.79";

					$http
							.get(
									"http://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&mode=json&cnt=1&lat="
											+ latitude
											+ "&lon="
											+ longitude
											+ "&mode=json")
							.success(
									function(res) {
										// alert(JSON.stringify(res));
										// if(res.cod == 200) //found the city
										// {
										 $ionicLoading.hide();
										var imageIcon = res.weather[0].icon;
										var todaylist = $scope.todaylist = res;
										$scope.icon = "http://openweathermap.org/img/w/"
												+ imageIcon + ".png";

										var sunriseTime = new Date(
												res.sys.sunrise * 1000);
										var sunset = new Date(
												res.sys.sunset * 1000);

										$scope.sunrise = sunriseTime.getHours()
												+ ":"
												+ sunriseTime.getMinutes();
										$scope.sunset = sunset.getHours() + ":"
												+ sunset.getMinutes();
										// }else{
										// alert("No any city found");
										// }

									}).error(function(error) {
										 $ionicLoading.hide();
								alert("Error Server : ");
							});
					 });

					// }

				})
		.controller(
				'SignUpCtrl',
				function($rootScope, $http, $scope, $window,$ionicLoading) {
					 $ionicLoading.show({
					      template: 'Loading...'
					    });
					
					 navigator.geolocation.getCurrentPosition(function(pos) {
					 var latitude=pos.coords.latitude;
					 var longitude=pos.coords.longitude;

//					var latitude = "30.73";
//					var longitude = "76.79";

					$http
							.get(
									"http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&lang=en&cnt=10&mode=json&mode=json&lat="
											+ latitude
											+ "&lon="
											+ longitude
											+ "&mode=json")
							.success(
									function(res) {
										$ionicLoading.hide();
										var weatherList = $scope.weatherList = res.list;
										var datelist = $scope.datelist = [];
										for ( var i = 0; i < weatherList.length; i++) {
											var time = weatherList[i].dt;
											var date = new Date(time * 1000);
											date.toString("MMM dd");
											var months = [ 'Jan', 'Feb', 'Mar',
													'Apr', 'May', 'Jun', 'Jul',
													'Aug', 'Sep', 'Oct', 'Nov',
													'Dec' ];
											datelist.push(date.getDate() + " "
													+ months[date.getMonth()]);
										}

									}).error(function(error) {
										$ionicLoading.hide();
								alert("Error Server : ");
							});
					 });
				})

/**
 * To draw root between two places
 */				
				
//				var start = new google.maps.LatLng(30.2323,
//									76.34342);
//							var directionsDisplay;
//						    var directionsService = new google.maps.DirectionsService();
//						    var map;
//						        directionsDisplay = new google.maps.DirectionsRenderer();
//						        var inticor= new google.maps.LatLng(start);
//						        var mapOptions =
//						                {
//						                    zoom: 9,
//						                    center: inticor,
//						                    mapTypeId: google.maps.MapTypeId.ROADMAP,
//						                };
//
//						        var map = new google.maps.Map(document
//										.getElementById("map"), mapOptions);
//						        directionsDisplay.setMap(map);      
//
//								
//								var start = new google.maps.LatLng(30.2323,
//										76.34342);
//								var end = new google.maps.LatLng(31.2323,
//										76.34342);
//								  var request = {
//								      origin:start,
//								      destination:end,
//								      travelMode: google.maps.TravelMode.DRIVING
//								  };
//								  directionsService.route(request, function(response, status) {
//								    if (status == google.maps.DirectionsStatus.OK) {
//								      directionsDisplay.setDirections(response);
//								    }
//								  });
				