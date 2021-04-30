(function () {
  "use strict";

  angular.module("public").controller("SignupController", SignupController);

  SignupController.$inject = ["SignupService", "$location"];
  function SignupController(SignupService, $location) {
    var $ctrl = this;
    $ctrl.firstname = "";
    $ctrl.lastname = "";
    $ctrl.email = "";
    $ctrl.phone = "";
    $ctrl.currentFavItem = "";
    $ctrl.favoriteMenu = [];
    $ctrl.hasFav = false;
    $ctrl.addFavError = "";
    $ctrl.submitForm = function () {
      var data = {
        firstname: $ctrl.firstname,
        lastname: $ctrl.lastname,
        email: $ctrl.email,
        phone: $ctrl.phone,
      };
      const storeDataStatus = SignupService.storeData(data);
      if (storeDataStatus) {
        $location.path("/success");
      }
    };

    $ctrl.addFavMenu = async function () {
      $ctrl.addFavError = "";
      var status = await SignupService.addFavoriteMenu($ctrl.currentFavItem);
      if (status === 200) {
        $ctrl.favoriteMenu.push($ctrl.currentFavItem);
        $ctrl.hasFav = true;
      } else {
        $ctrl.addFavError = "No such menu number exists";
      }
    };
  }
})();
