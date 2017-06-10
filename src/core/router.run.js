"use strict";

module.exports = routingEvents;

/* @ngInject */
function routingEvents($rootScope, commonFactory) {
    var notFoundDeregistration = $rootScope.$on("$stateNotFound", function () { });
    var changeSuccessDeregistration = $rootScope.$on("$stateChangeSuccess", function(Event, ToState) {
        // Add Page Title.
        $rootScope.pageTitle = ToState.title || "Complaints Filer";
        commonFactory.logMessage(ToState.name);
    });

    $rootScope.$on("$destroy", notFoundDeregistration);
    $rootScope.$on("$destroy", changeSuccessDeregistration);

    $rootScope.$on("$stateChangeSuccess", function(Event, ToState, ToParams, FromState) {
        if (isShellRoute(ToState.name) && isShellRoute(FromState.name)) {
            // handle logic here
        }
        function isShellRoute(Route) {
            return Route.split(".")[0] === "shell" && Route !== "shell.error";
        }
    });
}