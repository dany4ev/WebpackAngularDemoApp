"use strict";

var pluralize = require("pluralize");

module.exports = factory;

/* @ngInject */

function factory($q, $log, $timeout, $location) {

    var common = {

        replaceSpacesToUnderscore: function(value) {
            return value.replace(/ /gi, "_");
        },

        deferredPromise: function() {
            return $q.defer();
        },

        rejectPromise: function(promise) {
            return $q.reject(promise);
        },

        logMessage: function(message) {
            $log.info(message);
        },

        validate: function(form) {
            return form.$valid;
        },

        redirect: function(url, time) {
            $timeout(function() {
                $location.path(url);
            }, time);
        }
    };

    return common;
}