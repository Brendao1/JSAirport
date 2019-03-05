function Airport() {

  this.planes_landed = [];
}

Airport.prototype.land = function(plane) {
this.planes_landed.push(plane)
}
