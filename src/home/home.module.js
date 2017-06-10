"use strict"

var name = module.exports = "WebpackAngularDemoApp.home"

angular
    .module(name, [])
    .config(configuration)
    .controller("homeController", require("./home.controller.js"))
    .factory("homeFactory", require("./home.factory.js"))

function configuration($stateProvider) {
    $stateProvider
        .state("shell.home", {
            url: "Home",
            title: "Home",
            views: {
                'content@shell': {
                    template: require("./home.html"),
                    controller: "homeController as vm"
                }
            }
        })
}