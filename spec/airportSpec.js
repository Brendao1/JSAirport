describe('Airport', function(){
  it('should land a plane')
  var a = new Airport()
  var p = new Plane()
  a.land(p);
  execpt(a).toInclude(p);



});
