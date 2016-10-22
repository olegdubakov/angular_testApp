
angular
    .module("angularJsApp", ["ngRoute"])
    .config(routeConfig)
    .service("dataService", dataService)
    .controller("home", homeController)
    .controller("photo", photoController);