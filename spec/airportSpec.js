describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = { condition:  function(){} };
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane')
  });

  describe('::new', function() {

    it('has a place to store planes', function() {
      expect(airport.planes()).toEqual([])
    });

    it('defaults capacity', function() {
      expect(airport.capacity()).toEqual(20)
    });
  });

  describe('#setCapacity', function() {

    it('can override capacity', function() {
      airport.setCapacity(15)
      expect(airport.capacity()).toEqual(15)
    });

  });

  describe('#land', function() {

    it('lands a plane on airport', function() {
      spyOn(weather, "condition").and.returnValue('sunny');
      airport.land(plane)
      expect(airport.planes()).toContain(plane)
    });

    describe('when weather condition is stormy', function() {
      it('does not land a plane', function() {
        spyOn(weather, "condition").and.returnValue('stormy');
        expect(function(){ airport.land(plane) } ).toThrow("Weather is bad")
      });
    });

  });

  describe('#takeOff', function() {

    it('lets plane take off the airport', function() {
      spyOn(weather, "condition").and.returnValue('sunny');
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.planes()).not.toContain(plane)
    });

  });
});
