var app = angular.module('MyApp', ['authService','mainCtrl','appRoute','userService','userCtrl','storyService','storyCtrl','reverseDirective'])

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(function($httpProvider){
	
	$httpProvider.interceptors.push('AuthInterceptor');
})
