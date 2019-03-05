describe('Airport', function() {

  beforeEach(function() {
    a = new Airport();
    p = new Plane();
  })

  it('should land a plane', function() {
    a.land(p);
    expect(a.planes_landed).toContain(p);
  })

  it('should let a plane take off', function() {
  a.takeOff(p)
  expect(a.planes_landed).not.toContain(p)
  })

  it("says plane can't take off if it's stormy", function() {
    a.weather = "stormy";
    expect(a.air_control).toEqual("Plane can't take off")
  })

});
