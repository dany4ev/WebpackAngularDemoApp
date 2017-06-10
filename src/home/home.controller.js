"use strict"

module.exports = controller

/* @ngInject */

function controller($scope, $rootScope, $state, $stateParams, $timeout, $location, homeFactory,
    storageFactory, commonFactory, dataService, spinner, spinnerService) {

    var vm = this
    vm.spinner = spinner


    vm.init = function() {

    }
}