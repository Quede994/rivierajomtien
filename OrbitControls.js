
function OrbitControls(object, domElement) {
  this.object = object;
  this.domElement = domElement;
  this.enableZoom = true;
  this.enablePan = true;
  this.autoRotate = false;
  this.autoRotateSpeed = 2.0;

  const scope = this;
  let theta = 0;

  function onMouseMove(event) {
    theta += event.movementX * 0.005;
  }

  domElement.addEventListener('mousemove', onMouseMove, false);

  this.update = function () {
    if (scope.autoRotate) {
      theta += 0.01 * scope.autoRotateSpeed;
    }
    scope.object.position.x = 0.1 * Math.sin(theta);
    scope.object.position.z = 0.1 * Math.cos(theta);
    scope.object.lookAt(new THREE.Vector3(0, 0, 0));
  };
}
THREE.OrbitControls = OrbitControls;
