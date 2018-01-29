'use strict';
var P = require('bluebird');
var request = require('superagent');
var jwt = require('jsonwebtoken');

function VerifyRefreshToken(opts, encodeRefreshToken, renderingId, userId) {
  this.perform = function () {
    return new P(function (resolve, reject) {
      jwt.verify(encodeRefreshToken, opts.authSecret,
        function(err, decoded) {
          console.log({
            refreshToken: decoded.refreshToken,
            renderingId: renderingId,
            userId: userId,
          });
          request
            .post(opts.forestUrl + '/forest/verifyRefreshToken')
            .send({
              refreshToken: decoded.refreshToken,
              renderingId: renderingId,
              userId: userId,
            })
            .end(function (error, result) {
              if (result.status === 204) { return resolve(); }
              return reject();
            });
        });
    });
  };
}

module.exports = VerifyRefreshToken;
