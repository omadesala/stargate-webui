app.controller('DevicesCtl', ['$scope', '$http', 'filter', function ($scope, $http) {
    $scope.tbOptions = {
        data: [],
        aoColumns: [
            {mData: 'deviceid'},
            {mData: 'description'},
            {mData: 'createdate'}
        ]
    };

    $scope.getDevicesList = function () {
        var memURL = '/stargate/v1/device/items';
        $http({
            method: 'GET',
            url: memURL,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .success(function (data, status, headers, config) {
                angular.forEach(data.data, function (o) {
                    o.createdate = new Date(o.createdate).toDateString();
                });
                $scope.tbOptions.data = data.data;
                console.log(data);
            }).error(function (data, status, headers, config) {
                console.log(status);
            });
    };


    $scope.getDevicesList();
}]);