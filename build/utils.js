"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect type or missing comment');
    }
    return commentFromRequest;
};
const isString = (string) => {
    return typeof string === 'string' || string instanceof String;
};
const parseDate = (dateFromRquest) => {
    if (!isString(dateFromRquest) || !isDate(dateFromRquest)) {
        throw new Error('Incorrect date or missing date');
    }
    return dateFromRquest;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromRequest;
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
