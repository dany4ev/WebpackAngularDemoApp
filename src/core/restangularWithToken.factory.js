"use strict";

module.exports = factory;

/* @ngInject */


function factory($state, $injector, $q, Restangular, lodash, storageFactory, commonFactory) {

    return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setFullRequestInterceptor(function (Element, Operation, Route, Url, Headers) {
            // var header = {};
            // header.Authorization = "Bearer (Token Hash Here)";
            // return {
            //     headers: lodash.extend(Headers, header)
            // };
        });
        RestangularConfigurer.setErrorInterceptor(function (Response) {
            var state = $injector.get("$state");
            if (Response.status === 400 && Response.data) {
                // handle logic here
            }
            if (Response.status === 401) {
                // handle logic here
            }
            if (Response.status === 403) {
                // handle logic here
            }
            if (Response.status === 500) {
                //handle logic here
            }
            if (Response.status === 404) {
                state.go("shell.NotFound"); //this state need to be created
            }
            commonFactory.logMessage(Response);
        });
    });
}