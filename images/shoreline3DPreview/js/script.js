var scene, camera, renderer;
var mouse = new THREE.Vector2()
    , INTERSECTED;
init();
function init() {
    if (!Detector.webgl) Detector.addGetWebGLMessage();
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 6, 40);
    camera.rotation.x = 10 * Math.PI / 180;
    renderer = new THREE.WebGLRenderer({
        antialias: true
        , alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
    document.getElementById('jslocation').appendChild(renderer.domElement);
    light = new THREE.SpotLight(0xe8fdff, 1.3, 0, Math.PI, 1);
    light.position.set(20, 50, 50);
    light.target.position.set(0, 0, 0);
    scene.add(light);
    light.castShadow = true;
    light.angle = Math.PI / 4;
    light.penumbra = 1;
    light.distance = 200;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 200;
    //
    rearLight = new THREE.SpotLight(0xCCCCCC, 1.2, 0, Math.PI, 1)
    rearLight.position.set(-20, 150, -100);
    rearLight.target.position.set(-75, 50, 180);
    scene.add(rearLight);
    rearLight.visible = false;
    //
    amblight = new THREE.AmbientLight(0xFFFFFF, .75);
    scene.add(amblight);
    //
    window.addEventListener('resize', onWindowResize, false);
    render();
}

function render() {
    //My cutie patootie render that makes all the nice things render and flow
    TWEEN.update();
    requestAnimationFrame(render);
    //water fix in the render
    //render in the scene and camera
    renderer.render(scene, camera);
}
function onWindowResize() {
    //This is my window resize fix
    //
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}