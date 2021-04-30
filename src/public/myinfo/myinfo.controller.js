(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['favMenuItems','userData', 'hasUserData','hasFavMenu'];
function MyinfoController(favMenuItems, userData, hasUserData,hasFavMenu) {
  var $ctrl = this;
  $ctrl.favMenuItems = favMenuItems;
  $ctrl.userData = userData;
  $ctrl.hasUserData = hasUserData;
  $ctrl.hasFavMenu = hasFavMenu;
}

})();
