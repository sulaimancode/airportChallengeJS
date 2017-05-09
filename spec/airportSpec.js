describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
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
      airport.land(plane)
      expect(airport.planes()).toContain(plane)
    });

  });

  describe('#takeOff', function() {

    it('lets plane take off the airport', function() {
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.planes()).not.toContain(plane)
    });

  });
});
