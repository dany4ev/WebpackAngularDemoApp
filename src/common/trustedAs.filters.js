"use strict";

module.exports = filter;

/* @ngInject */
function filter($sce) {
    return function (Text) {
        return $sce.trustAsResourceUrl(Text);
    };
}
