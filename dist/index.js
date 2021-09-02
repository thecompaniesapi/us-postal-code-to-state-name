"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertPostalCodeToStateName = exports.data = void 0;
const data = require('./data.json');
exports.data = data;
const convertPostalCodeToStateName = (postalCode) => {
    postalCode = postalCode.toLowerCase();
    if (data[postalCode]) {
        return data[postalCode].name;
    }
    return null;
};
exports.convertPostalCodeToStateName = convertPostalCodeToStateName;
