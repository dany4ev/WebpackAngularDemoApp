"use strict";

module.exports = factory;

/* @ngInject */
function factory() {
    return {
        save: function (Entity, Data) {
            localStorage.setItem(Entity, JSON.stringify(Data));
        },
        get: function (Entity) {
            var json = localStorage.getItem(Entity);
            return json ? JSON.parse(json) : null;
        },
        deleteItem: function (Entity) {
            localStorage.removeItem(Entity);
        }
    };
}