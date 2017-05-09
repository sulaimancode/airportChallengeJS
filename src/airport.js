var Airport = function(){
  this._CAPACITY = 20
  this._planes = []
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
    return  this._planes.push(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    return  this._planes.pop(plane);
  };
