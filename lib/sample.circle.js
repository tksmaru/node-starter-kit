
module.exports.area = function(radius) {
  if (!radius || radius <= 0) {
    throw new TypeError('invalid radius : ' + radius);
  }
  return Math.PI * radius * radius;
};

module.exports.areaAsync = function(radius) {
  return new Promise(function(resolve, reject) {
    if (!radius || radius <= 0) {
      return reject(new TypeError('invalid radius : ' + radius));
    }
    return resolve(Math.PI * radius * radius);
  });
};
