function homeController($scope, dataService, $location)
{
    console.log(dataService);
    $scope.data = dataService.getAllPhotos();

    $scope.changeDetails = function (imageId) {
        $location.path("/photo/" + imageId);
    }
}