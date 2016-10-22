function photoController($scope, dataService, $routeParams, $location)
{
    var imageId = $routeParams.imageId;
    var imageObject = dataService.getPhotoById(imageId);

    $scope.name = imageObject.data.name;
    $scope.author = imageObject.data.author;
    $scope.status = imageObject.data.status;
    $scope.likes_count = imageObject.data.likes_count;
    $scope.path = imageObject.data.path;

    $scope.saveChanges = function ()
    {
        dataService.saveImage(imageId, $scope.name, $scope.status);
        $location.path("/");
    }
}