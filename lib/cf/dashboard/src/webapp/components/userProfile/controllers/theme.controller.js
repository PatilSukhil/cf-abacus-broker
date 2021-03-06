'use strict';

/* eslint no-var: 0 */
/* eslint-disable max-len */

angular.module('Resource-Provider.userProfile').controller('themeController', ['$uibModal', 'themeService', function($uibModal, themeService) {
  var that = this;

  that.windowReload = function(w) {
    w.location.reload();
  };

  that.showModalDialog = function() {
    var modalInstance = $uibModal.open({
      templateUrl: 'components/userProfile/templates/themeModalTemplate.html',
      controller: 'themeModalController',
      controllerAs: 'TMC',
      resolve: {
        messageBundle: function() {
          return themeService.getmessageBundle()
            .then(function(res) {
              return res.data;
            }, function(err, result) {

            });
        }
      }
    });

    modalInstance.result.then(function() {
      that.windowReload(window);
    });
  };
}]);
