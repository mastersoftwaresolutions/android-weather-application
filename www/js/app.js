// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter',
		[ 'ionic', 'starter.controllers', 'starter.services' ])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory
		// bar above the keyboard
		// for form inputs)
		
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
			  
	});
}).config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('auth', {
		url : "/auth",
		abstract : true,
		templateUrl : "templates/auth.html"
	}).state('auth.signin', {
		url : '/signin',
		views : {
			'auth-signin' : {
				templateUrl : 'templates/auth-signin.html',
				controller : 'SignInCtrl'
			}
		}
	}).state('auth.signup', {
		url : '/signup',
		views : {
			'auth-signup' : {
				templateUrl : 'templates/auth-signup.html',
				controller : 'SignUpCtrl'
			}
		}
	})
	.state('auth.maps', {
		url : '/maps',
		views : {
			'auth-maps' : {
				templateUrl : 'templates/auth-maps.html',
				controller : 'MapController'
			}
		}
	})
	.state('auth.signup-detail', {
		url : '/signup/:weatherId',
		views : {
			'auth-signup' : {
				templateUrl : 'templates/signup-detail.html',
				controller : 'signupDetailCtrl'
			}
		}
	})

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/auth/signin');

});
