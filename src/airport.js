var Airport = function(weather = new Weather()) {
  this._CAPACITY = 20
  this._planes = []
  this._weather = weather
};

  Airport.prototype.planes = function() {
    return  this._planes;
  };

  Airport.prototype.capacity = function() {
    return  this._CAPACITY;
  };

  Airport.prototype.setCapacity = function(number) {
    return  this._CAPACITY = number
  };

  Airport.prototype.land = function(plane) {
    if (this._weather.condition() === 'stormy') {
      throw 'Weather is bad';
    }
    else {
      return  this._planes.push(plane);
    }
  };

  Airport.prototype.takeOff = function(plane) {
    return  this._planes.pop(plane);
  };



  // Airport.prototype._isStormy = function() {
  //   var weather = new Weather();
  //   return  weather.condition ==
  // };
