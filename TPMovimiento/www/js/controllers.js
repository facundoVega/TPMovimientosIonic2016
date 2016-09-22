angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('principalCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion','$window',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function1
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceMotion, $window) {

    var options = { frequency: 2000 };
     $('#bart1').hide();
     $('#bart2').hide();
     $('#bart3').hide();
     $('#bart4').hide();

 document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady()
  {
      var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },

      function(result) {
        $scope.valores = {};
        $scope.valores.X = result.x;
         
        $scope.valores.Y = result.y;
        $scope.valores.Z = result.z;
        var timeStamp = result.timestamp;

      
        if($scope.valores.X > 2)
        //  $scope.valores.estado= "izquierda";
           $('#bart2').show();
           $('#bart1').hide();
         $('#bart3').hide();
         $('#bart4').hide();

        if($scope.valores.X < -2)
         // $scope.valores.estado= "derecha";
         $('#bart3').show();
         $('#bart1').hide();
         $('#bart2').hide();
         $('#bart4').hide();

         if($scope.valores.Y < -3)
          $scope.valores.estado= "arriba";
          $('#bart1').show();
          $('#bart2').hide();
          $('#bart3').hide();
          $('#bart4').hide();

         if($scope.valores.Y > 4)
          $scope.valores.estado= "abajo";
          $('#bart4').show();
          $('#bart2').hide();
          $('#bart3').hide();
          $('#bart1').hide();

        if($scope.valores.Z < -10)
          $scope.valores.estado= "dado vuelta";


    })
  }
  

  }])

  // Esto para el ciclo. Watch es como un setInterval. Se repite cada cierto tiempo (options.frequency)
  //watch.clearWatch();}])
   
.controller('informacionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 