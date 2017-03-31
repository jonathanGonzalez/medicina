// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova' , 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.splash', {
    url: '/splash',
    views: {
      'menuContent': {
        templateUrl: 'templates/splash.html'
      }
    }
  })

 .state('app.perfil', {
    url: '/perfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/perfil.html',
        controller: 'PerfilCtrl'
      }
    }
  })

  .state('app.registro', {
    url: '/registro',
    views: {
      'tab-registro': {
        templateUrl: 'templates/registro.html',
        controller: 'RegistroCtrl'
      }
    }
  })
  
  .state('app.login_registro', {
    url: '/login_registro',
    views: {
      'menuContent': {
        templateUrl: 'templates/login_registro.html',
        controller: 'LoginCtrl'
      }
    }
  })
  
  .state('app.main', {
    url: '/main',
    views: {
      'menuContent': {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      }
    }
  })
  .state('app.sign-up', {
    url: '/sign-up',
    views: {
      'menuContent': {
        templateUrl: 'templates/registro.html'
      }
    }
  })
  
  .state('app.citas_medicas', {
    url: '/citas_medicas',
    views: {
      'menuContent': {
        templateUrl: 'templates/citas_medicas.html'
      }
    }
  })

  .state('app.enfermeria', {
    url: '/enfermeria',
    views: {
      'menuContent': {
        templateUrl: 'templates/enfermeria.html'
      }
    }
  })
  
  .state('app.especialistas', {
    url: '/especialistas',
    views: {
      'menuContent': {
        templateUrl: 'templates/especialistas.html',
        controller: 'EspecialidadesCtrl'
      }
    }
  })
  
  .state('app.ambulancias', {
    url: '/ambulancias',
    views: {
      'menuContent': {
        templateUrl: 'templates/ambulancias.html',
        controller: 'ambulanciasCtrl'
      }
    }
  })
  
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
.state('app.terminos', {
      url: '/terminos',
      views: {
        'menuContent': {
          templateUrl: 'templates/terminos.html',
        }
      }
    })
    .state('app.aviso', {
      url: '/aviso',
      views: {
        'menuContent': {
          templateUrl: 'templates/avisoPerfil.html',
        }
      }
    })
    .state('checkOut', {
      url: '/page3',
      templateUrl: 'templates/checkOut.html',
      controller: 'checkOutCtrl'
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login_registro');
});
