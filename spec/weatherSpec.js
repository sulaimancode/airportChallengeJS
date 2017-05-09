describe('Weather', function() {
  var weather;

  describe('#condition', function() {
    it('generates random weather condition', function() {
      weather = new Weather();
      spyOn(Math, 'floor').and.returnValue(1);
      expect(weather.condition()).toEqual('sunny')
    });
  });

});
