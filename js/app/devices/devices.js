app.controller('DevicesCtl', ['$scope', '$http',  function ($scope, $http) {
  $scope.tbOptions = {
    data: [],
    aoColumns: [
      { mData: 'deviceid' },
      { mData: 'description' },
      { mData: 'createDate' }
    ]
  };

  $scope.getDevicesList = function () {
    var memURL = 'http://localhost/stargate/v1/device/items';
    $http({
      method: 'GET',
      url: memURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
        .success(function (data, status, headers, config) {
          $scope.tbOptions.data = data;
          console.log(data);
        }).error(function (data, status, headers, config) {
      console.log(status);
    });
  };
  $scope.getDevicesList();
}]);