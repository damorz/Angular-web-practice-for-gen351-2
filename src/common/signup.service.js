(function () {
  "use strict";

  angular.module("common").service("SignupService", SignupService);

  SignupService.$inject = ["$http", "ApiPath"];
  function SignupService($http, ApiPath) {
    var service = this;
    service.userData = {};
    service.favMenuList = [];
    service.hasUserData = false;
    service.hasFavMenu = false;

    service.addFavoriteMenu = function (shortname) {
      return $http
        .get(ApiPath + `/menu_items/${shortname}.json`)
        .then(function (response) {
          service.favMenuList.push(response.data);
          service.hasFavMenu = true;
          return response.status;
        }).catch(function(response) {
          return response.status;
      })
    };

    service.storeData = function (data) {
      try {
        service.userData = data;
      } catch (error) {
        console.error("Store data process fail.");
        return false;
      }
      service.hasUserData = true;
      return true;
    };
  }
})();
