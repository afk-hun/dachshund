"use strict";

const {
  DOMINIK_TARIFS,
  HANNA_TARIFS,
  UNAUTHORIZED_USER,
} = require("./mocks");

const users = [
  {
      name: 'hanna',
      tariffs: HANNA_TARIFS,
      denied: false
  },
  {
      name: 'dominik',
      tariffs: DOMINIK_TARIFS,
      denied: false
  },
  {
      name: 'adel',
      tariffs: null,
      denied: true
  },
  {
      name: 'kristof',
      tariffs: null,
      denied: true
  },    
]

/**
 * Fetch all tarrifs
 * You will get a package with our awesome tariffs and their details
 *
 * offer_id String id of offer
 * tarriff_code String code of tariff
 * returns List
 **/
exports.tariffsGET = function (offer_id, tarriff_code, user_token) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    var resTariff;
    if (!user_token) {
      resTariff = UNAUTHORIZED_USER;
    } else if (user_token) {
      const user = users.find((element) => element.name === user_token);
      console.log(users);
      if (user) {
        if (!user.denied) {
          if (tarriff_code === "YPRPHS") {
            resTariff = user.tariffs;
          } else {
            resTariff = [...user.tariffs, ...UNAUTHORIZED_USER];
          }
        } else {
          reject(["access denied"]);
        }
      } else {
        reject(["user not found"]);
      }
    }
    examples["application/json"] = resTariff;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
