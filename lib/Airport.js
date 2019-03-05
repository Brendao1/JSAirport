function Airport() {

  this.planes_landed = [];
}

Airport.prototype.land = function(plane) {
this.planes_landed.push(plane)
}

Airport.prototype.takeOff = function(plane) {
this.planes_landed.splice( this.planes_landed.indexOf(p), 1);
  console.log(this.planes_landed);
}
