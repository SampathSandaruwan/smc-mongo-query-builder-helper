"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SMCQueryBuilderHelper = /** @class */ (function () {
    function SMCQueryBuilderHelper() {
    }
    SMCQueryBuilderHelper.prototype.valueMatcher = function (filter, key, value) {
        if (value || value === false) {
            filter[key] = value;
        }
        return filter;
    };
    SMCQueryBuilderHelper.prototype.objectIdMatcher = function (filter, key, value) {
        if (value) {
            try {
                filter[key] = mongoose_1.Types.ObjectId(value);
            }
            catch (e) { }
        }
        return filter;
    };
    SMCQueryBuilderHelper.prototype.patternMatcher = function (filter, key, value) {
        if (value) {
            filter[key] = { $regex: new RegExp(value, 'i') };
        }
        return filter;
    };
    SMCQueryBuilderHelper.prototype.patternUnMatcher = function (filter, key, value) {
        if (value) {
            filter[key] = { $not: new RegExp(value, 'i') };
        }
        return filter;
    };
    SMCQueryBuilderHelper.prototype.orOperator = function (filter, valuesArray) {
        if (valuesArray && valuesArray.length > 0) {
            filter['$or'] = valuesArray;
        }
        return filter;
    };
    SMCQueryBuilderHelper.prototype.andOperator = function (filter, valuesArray) {
        if (valuesArray && valuesArray.length > 0) {
            filter['$and'] = valuesArray;
        }
        return filter;
    };
    SMCQueryBuilderHelper.prototype.arrayElementMatcher = function (filter, key, valuesArray) {
        if (valuesArray && valuesArray.length > 0) {
            filter[key] = { $in: valuesArray };
        }
        return filter;
    };
    SMCQueryBuilderHelper.prototype.numberPatternMatcher = function (filter, key, value) {
        if (value) {
            if (!filter.$expr) {
                filter.$expr = {};
            }
            if (!filter.$expr.$and) {
                filter.$expr.$and = [];
            }
            filter.$expr.$and.push({
                $regexMatch: {
                    input: { $toString: "$" + key },
                    regex: new RegExp(value.toString(), 'i')
                }
            });
        }
        return filter;
    };
    return SMCQueryBuilderHelper;
}());
exports.default = new SMCQueryBuilderHelper();
