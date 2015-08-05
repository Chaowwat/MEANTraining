'use strict';

/**
 * @ngdoc function
 * @name geekAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geekAngularApp
 */
/**angular.module('geekAngularApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/

angular.module('geekAngularApp')
  .controller('MainCtrl', function ($scope, $http) {

  	$scope.awesomeThings = [];

  	$scope.refreshblog = function(){
		$http.get('http://localhost:9001/blogs').then(
  		function(response){
  			//debugger;
  			 $scope.awesomeThings = response.data;
  			//$scope.myInput = response.data;
  		},function(error){
  			//debugger;
  			alert("Error issue with port 9001");
  			$scope.errorString = 'Service not ready : Error issue with port 9001';
  		}

  	)

  	}

  	$scope.refreshblog();

    /*$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/

	$scope.addMyInputAwesomeThings = function(){
		//$scope.awesomeThings.pop();
		var newpost = {
			title : $scope.title,
			content : $scope.content,
			post_by : 'Chaowwat Sejaem',
			comment : []
		};

		$http.post('http://localhost:9001/blogs',newpost).then(
			function(response){
				alert(response.status);
				$scope.refreshblog();
	  			//debugger;
	  			//$scope.myInput = response.data;
  			},function(error){
	  			//debugger;
	  			//alert("Error issue with port 9001");
  			}

		)

		//$scope.awesomeThings.push();
		$scope.title = '';
		$scope.content = '';
	}

  });



