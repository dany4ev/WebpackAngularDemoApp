"use strict"

var moment = require("moment")
window.moment = moment

require("angular-ui-router")

var name = module.exports = "WebpackAngularDemoApp.core"

// Fix to make restangular work with webpack since it doesn't support common js.
// For more info: https://github.com/mgonto/restangular/issues/749
require("restangular")

angular
    .module(name, ["ui.router", "restangular"])
    .config(require("./restangular.config.js"))
    .config(require("./router.config.js"))
    .factory("restangularWithTokenFactory", require("./restangularWithToken.factory.js"))
    .run(require("./router.run.js"))
    .value("lodash", _)