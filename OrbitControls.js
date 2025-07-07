THREE.OrbitControls = function (object, domElement) {
  this.object = object;
  this.domElement = domElement;
  this.enableZoom = true;
  this.enablePan = true;
  this.update = function () {};
};