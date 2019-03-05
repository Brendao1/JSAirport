describe('Airport', function() {

  beforeEach(function() {
    a = new Airport();
    p1 = new Plane();
    p2 = new Plane();
    p3 = new Plane();
  })

  it('should land a plane', function() {
    a.land(p1);
    expect(a.planes_landed).toContain(p1);
  })

  it('should let a plane take off', function() {
  a.takeOff(p1)
  expect(a.planes_landed).not.toContain(p1)
  })

  it("says plane can't take off if it's stormy", function() {
    a.weather = "stormy";
    expect(a.air_control(p1)).toEqual("Plane can't take off")
  })

  it("prevents landing when airport is full", function() {
    a.capacity = 2
    a.land(p1)
    a.land(p2)
    expect(a.land(p3)).toEqual("sorry, airport is full!")
  })

});
