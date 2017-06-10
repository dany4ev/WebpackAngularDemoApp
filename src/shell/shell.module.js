"use strict"

require("angular-spinners")
var name = module.exports = "WebpackAngularDemoApp.shell"


angular
    .module(name, ["angularSpinners"])
    .config(configuration)
    .controller("shellController", require("./shell.controller.js"))
    .factory("shellFactory", require("./shell.factory.js"))
    .constant("spinner", require("../../public/images/ajax-loader.gif"))

function configuration($stateProvider) {

    $stateProvider
        .state("shell", {
            url: "/",
            views: {
                '@': {
                    template: require("./shell.html"),
                    controller: "shellController as vm"
                },
                'header@shell': {
                    template: require("./header.html")
                },
                'footer@shell': {
                    template: require("./footer.html")
                }
            }
        })
}