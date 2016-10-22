function routeConfig($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: "home",
                templateUrl: '/assets/views/home.html'
            })
        .when('/photo/:imageId',
            {
                controller: "photo",
                templateUrl: '/assets/views/photo.html'
            })
        .otherwise({
            redirect: '/'
        });
}