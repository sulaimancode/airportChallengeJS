var Weather = function() {
  this._conditions = ['sunny', 'sunny', 'stormy', 'sunny'];
};

Weather.prototype.condition = function() {
  return this._conditions[Math.floor ( Math.random() * this._conditions.length )]
};
