'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.tariffsGET = function tariffsGET (req, res, next, offer_id, tarriff_code) {
  Default.tariffsGET(offer_id, tarriff_code, req.headers['x-api-key'])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
