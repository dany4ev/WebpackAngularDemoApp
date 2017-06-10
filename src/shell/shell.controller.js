"use strict"

module.exports = controller

/* @ngInject */
function controller($state, storageFactory, commonFactory) {

    var vm = this
    vm.toggle = false

    vm.goTo = function(route) {
        commonFactory.logMessage("route: " + route)
        $state.go(route)
    }

    vm.year = new Date().getFullYear()
}