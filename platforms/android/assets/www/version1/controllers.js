angular.module('starter.controllers', [])

//controlador para Ingresar a la cuenta del Usuario

.controller('LoginCtrl', function($http,$ionicPopup,$scope,$window){
 $scope.errors = [];
 $scope.msgs =[];
$scope.redirLogin = function(){
  $window.location = "#/app/main";
 };
 $scope.login = function(){

    $scope.errors.splice(0,$scope.errors.length);
      $scope.msgs.splice(0,$scope.msgs.length);
      if ($scope.login_Correo!= null && $scope.login_Password != null ) {
      $http.post('http://localhost/Co-Workers/APPS/MedicApp/www/api/login.php',
      {
            'correo': $scope.login_Correo, 'password': $scope.login_Password,
      }).success(function(data,status,header,config){
               if(data.msg!= ''){
                $scope.msgs.push(data.msg);
                  $scope.showAlert = function() {
                    var alertPopup = $ionicPopup.alert({
                      title: 'Usuario',
                      template: 'Nos alegra que estes de regreso en MedicApp',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });
                  };
                  $scope.showAlert();  
                  //Aqui poner llamado a inicio
              }else{
               $scope.errors.push(data.error); 
              }


          }).error(function(){

        $scope.msgs.push(data.status);
      });
    }
     else {
      $scope.msgs.push(data.msg);
        $scope.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
            title: $scope.nombres,
            template: 'Te faltan campos por llenar. Por favor diligencia el formulario completamente',
            cssClass: 'dark',
             okType: 'button-positive'
           });
         };
        $scope.showAlert();
    }
}})

//fin del controlador para ingresar a la cuenta del usuario

//Controlador del Registro

.controller('RegistroCtrl', function($http,$ionicPopup,$scope,$window,$cordovaLocalNotification){
 
 $scope.errors = [];
 $scope.msgs =[];

 $scope.redirSplash = function(){
  $window.location = "#/app/splash";
 };
 $scope.inscribir = function(){

    $scope.errors.splice(0,$scope.errors.length);
      $scope.msgs.splice(0,$scope.msgs.length);
      if ($scope.nombres != null && $scope.apellidos != null && $scope.tipo != null && $scope.sexo != null && $scope.documento != null && $scope.nacimiento != null && $scope.telefono != null && $scope.correo != null && $scope.password != null && $scope.terminos != null) {
      $http.post('http://localhost/Co-Workers/APPS/MedicApp/www/api/insertar.php',
      {
            'nombres': $scope.nombres, 'apellidos' :$scope.apellidos, 'tipo': $scope.tipo, 'sexo': $scope.sexo, 'documento': $scope.documento, 'nacimiento': $scope.nacimiento, 'telefono': $scope.telefono, 'correo': $scope.correo, 'password': $scope.password, 'terminos': $scope.terminos,
      }).success(function(data,status,header,config){
               if(data.msg!= ''){
                //inicia el codigo de la notificacion local                      
                        $cordovaLocalNotification.schedule({
                          id: 1,
                          title: 'Felicidades,',
                          text: ' Se ha registrado correctamente',
                          data: {
                            customProperty: 'custom value'
                          }
                        }).then(function (result) {
                          // ...
                        });
                //finaliza el co de la notificacion local
                   $location.path("/splash");
              }else{               
                        $cordovaLocalNotification.schedule({
                          id: 1,
                          title: 'Espera,',
                          text: ' Ha ocurrido un error en tu registro, intentalo nuevamente',
                          data: {
                            customProperty: 'custom value'
                          }
                        }).then(function (result) {
                          // ...
                        });
                       
              }
       
      });
    }
    
}})

//Fin del Controlador del Registro

//controlador para la actualizar el Perfil del Usuario

.controller('PerfilCtrl', function($http,$ionicPopup,$scope,$window){
 $scope.errors = [];
 $scope.msgs =[];

 $scope.redirPerfil = function(){
$window.location = "#/app/main";
}

 $scope.actPerfil = function(){

    $scope.errors.splice(0,$scope.errors.length);
      $scope.msgs.splice(0,$scope.msgs.length);
      if ($scope.id_registro != null && $scope.medicamentos != null && $scope.alergias != null && $scope.cirugias != null && $scope.eps != null) {
      $http.post('http://localhost/Co-Workers/APPS/MedicApp/www/api/perfil.php',
      {
            'id_registro': $scope.id_registro, 'medicamentos': $scope.medicamentos, 'alergias' :$scope.alergias, 'cirugias': $scope.cirugias, 'eps': $scope.eps,
      }).success(function(data,status,header,config){
               if(data.msg!= ''){
                $scope.msgs.push(data.msg);
                  $scope.showAlert = function() {
                    var alertPopup = $ionicPopup.alert({
                      title: 'Felicidades',
                      template: 'Haz actualizado tu perfil correctamente',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });
                  };
                  $scope.showAlert();  
                  //Aqui poner llamado a inicio
              }else{
               $scope.errors.push(data.error); 
              }


          }).error(function(){

        $scope.msgs.push(data.status);
      });
    }
     else {
      $scope.msgs.push(data.msg);
        $scope.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
            title: $scope.nombres,
            template: 'Te faltan campos por llenar. Por favor diligencia el formulario completamente',
            cssClass: 'dark',
             okType: 'button-positive'
           });
         };
        $scope.showAlert();
    }
}})

//fin del controlador para actualizar el Perfil del Usuario
.controller('SplashCtrl', function($scope,$window){
$scope.redirSplash = function(){
$window.location = "#/app/aviso";
}
})
//fin del controlador para la página Splash

//inicio del controlador para la página Términos y Condiciones 

.controller('TerminosCtrl', function($scope,$window){
$scope.redirRegistro = function(){
$window.location = "#/app/sign-up";
}
})
//fin del controlador para la página Términos y Condiciones
.controller('AvisoPerfilCtrl', function($scope,$window){
$scope.redirAvisoPerfil = function(){
$window.location = "#/app/perfil";
}
})
//Inicia el controlador para la Consulta médica General

.controller('ConsultaCtrl', function($http,$ionicPopup,$scope){
 $scope.errors = [];
 $scope.msgs =[];
 $scope.consulta = function(){

    $scope.errors.splice(0,$scope.errors.length);
      $scope.msgs.splice(0,$scope.msgs.length);
      if ($scope.idUsuario != null && $scope.usuario != null && $scope.direccion != null && $scope.tipoConsulta != null && $scope.fecha != null && $scope.hora != null && $scope.sintomas != null) {
      $http.post('http://localhost/Co-Workers/APPS/MedicApp/www/api/consulta.php',
      {
            'idUsuario': $scope.idUsuario, 'usuario': $scope.usuario, 'direccion': $scope.direccion,  'tipoConsulta': $scope.tipoConsulta, 'fecha': $scope.fecha, 'hora': $scope.hora, 'sintomas':$scope.sintomas,
      }).success(function(data,status,header,config){
               if(data.msg!= ''){
                $scope.msgs.push(data.msg);
                  $scope.showAlert = function() {
                    var alertPopup = $ionicPopup.alert({
                      title: 'Usuario',
                      template: 'Su consulta está en proceso de verificación. Le contactaremos prontamente.',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });
                  };
                  $scope.showAlert();  
                  //Aqui poner llamado a inicio
              }else{
               $scope.errors.push(data.error); 
                
              }


          }).error(function(){

        $scope.msgs.push(data.status);
        $scope.msgs.push(data.msg);
                  $scope.showAlert = function() {
                    var alertPopup = $ionicPopup.alert({
                      title: $scope.nombres,
                      template: 'Su consulta no ha podido ser procesada, Por favor intentelo nuevamente',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });
                  };
                  $scope.showAlert(); 
      });
    }
     else {
      $scope.msgs.push(data.msg);
        $scope.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
            title: $scope.nombres,
            template: 'Te faltan campos por llenar. Por favor diligencia el formulario completamente',
            cssClass: 'dark',
             okType: 'button-positive'
           });
         };
        $scope.showAlert();
    }
    
}})

//fin del controlador para la Consulta médica General


//Inicia el controlador para la Consulta de enfermería

.controller('EnfermeriaCtrl', function($http,$ionicPopup,$scope){
 $scope.errors = [];
 $scope.msgs =[];
 $scope.consulta_enfermeria = function(){

    $scope.errors.splice(0,$scope.errors.length);
      $scope.msgs.splice(0,$scope.msgs.length);
      if ($scope.idUsuario != null && $scope.usuario != null && $scope.direccion != null && $scope.tipoConsulta != null && $scope.fecha != null && $scope.hora != null && $scope.sintomas != null) {
      $http.post('http://localhost/Co-Workers/APPS/MedicApp/www/api/consultaEnfermeria.php',
      {
            'idUsuario': $scope.idUsuario, 'usuario': $scope.usuario, 'direccion': $scope.direccion,  'tipoConsulta': $scope.tipoConsulta, 'fecha': $scope.fecha, 'hora': $scope.hora, 'sintomas':$scope.sintomas,
      }).success(function(data,status,header,config){
               if(data.msg!= ''){
                $scope.msgs.push(data.msg);
                  $scope.showAlert = function() {
                    var alertPopup = $ionicPopup.alert({
                      title: 'Usuario',
                      template: 'Su consulta está en proceso de verificación. Le contactaremos prontamente.',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });
                  };
                  $scope.showAlert();  
                  //Aqui poner llamado a inicio
              }else{
               $scope.errors.push(data.error); 
                
              }


          }).error(function(){

        $scope.msgs.push(data.status);
        $scope.msgs.push(data.msg);
                  $scope.showAlert = function() {
                    var alertPopup = $ionicPopup.alert({
                      title: $scope.nombres,
                      template: 'Su consulta no ha podido ser procesada, Por favor intentelo nuevamente',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });
                  };
                  $scope.showAlert(); 
      });
    }
     else {
      $scope.msgs.push(data.msg);
        $scope.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
            title: $scope.nombres,
            template: 'Te faltan campos por llenar. Por favor diligencia el formulario completamente',
            cssClass: 'dark',
             okType: 'button-positive'
           });
         };
        $scope.showAlert();
    }
    
}})

//fin del controlador para la Consulta de enfermería




.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('EspecialidadesCtrl', function($scope) {

  $scope.lista_especialidades = [
    { title: 'anatomía patológica', id: 1 },
    { title: 'alergologia', id: 2 },
    { title: 'cardiología', id: 3 },
    { title: 'cirugía cardiaca', id: 4 },
    { title: 'cirugía general', id: 5 },
    { title: 'cirugía plastica', id: 6 },
    { title: 'cirugía de mama', id: 7 },
    { title: 'cirugía maxilofacial', id: 8 },
    { title: 'cirugía vascular', id: 9 },
    { title: 'dermatología', id: 10 },
    { title: 'endocrinología y nutrición', id: 11 },
    { title: 'gastroenterología- digestivo', id: 12 },
    { title: 'genética', id: 13 },
    { title: 'geriatría', id: 14 },
    { title: 'ginecología', id: 15 },
    { title: 'hematología', id: 16 },
    { title: 'enfermedades del hígado (hepatología)', id: 17 },
    { title: 'enfermedades infecciosas', id: 18 },
    { title: 'medicina interna', id: 19 },
    { title: 'nefrología', id: 20 },
    { title: 'neumologia', id: 21 },
    { title: 'neurología', id: 22 },
    { title: 'neurocirugía', id: 23 },
    { title: 'oftalmología', id: 24 },
    { title: 'otorrinolaringologia', id: 24 },
    { title: 'oncología', id: 26 },
    { title: 'pediatría', id: 27 },
    { title: 'proctología', id: 28 },
    { title: 'psiquiatría', id: 29 },
    { title: 'rehabilitación y m. deportiva', id: 30 },
    { title: 'reumatología', id: 31 },
    { title: 'traumatología', id: 32 },
    { title: 'urología', id: 33 }
  ];
})

.controller('ambulanciasCtrl', function($http,$ionicPopup,$scope){
 $scope.errors = [];
 $scope.msgs =[];
 $scope.ambulancias = function(){

    $scope.errors.splice(0,$scope.errors.length);
      $scope.msgs.splice(0,$scope.msgs.length);
      if ($scope.idUsuario != null && $scope.fecha != null && $scope.hora != null && $scope.lugar != null && $scope.descripcion != null) {
      $http.post('http://localhost/Co-Workers/APPS/MedicApp/www/api/ambulancias.php',
      {
            'idUsuario': $scope.idUsuario, 'fecha': $scope.fecha, 'hora': $scope.hora, 'lugar': $scope.lugar, 'descripcion': $scope.descripcion,
      }).success(function(data,status,header,config){
               if(data.msg!= ''){
                $scope.msgs.push(data.msg);
                  $scope.showAlert = function() {
                    var alertPopup = $ionicPopup.alert({
                      title: 'Usuario',
                      template: 'Su consulta está en proceso de verificación. Le contactaremos prontamente.',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });
                  };
                  $scope.showAlert();  
                  //Aqui poner llamado a inicio
              }else{
               $scope.errors.push(data.error); 
                
              }


          }).error(function(){

        $scope.msgs.push(data.status);
        $scope.msgs.push(data.msg);
                  $scope.showAlert = function() {
                    var alertPopup = $ionicPopup.alert({
                      title: $scope.nombres,
                      template: 'Su consulta no ha podido ser procesada, Por favor intentelo nuevamente',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });
                  };
                  $scope.showAlert(); 
      });
    }
     else {
      $scope.msgs.push(data.msg);
        $scope.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
            title: $scope.nombres,
            template: 'Te faltan campos por llenar. Por favor diligencia el formulario completamente',
            cssClass: 'dark',
             okType: 'button-positive'
           });
         };
        $scope.showAlert();
    }
    
}})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('mostrarPaciente', function($scope){
  alert($scope.usuario_consulta)
})

;

