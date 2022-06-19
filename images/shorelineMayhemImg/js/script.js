var scene, camera, renderer, group;
var flowWater = true; //making the water stop
var stepCount = 0; //is the variable that makes everything flow
var heightThickness = 5; //max height and depth of the water overall
var moveSpeed = 500; //speed of the waves
var flowControl = 30; //controls how the water flows and if it flows
var noiseScale = 3; //similar to that of the control it's how big the noise is scalled up by to fit
var noiseSeed = Math.random() * 100; //starting at a random position
var snoise = new ImprovedNoise(); //noise
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
    group = new THREE.Group();
    waterMaterial = new THREE.MeshLambertMaterial({
        color: 0x00AAEE
        , transparent: true
        , opacity: .65
        , side: THREE.DoubleSide
    , });
    for (y = 0; y < 50; y++) {
        for (x = 0; x < 50; x++) {
            var geometry = new THREE.BoxGeometry(3, 3, 10);
            var model = new THREE.Mesh(geometry, waterMaterial);
            model.position.x = x * 3;
            model.position.y = y * 3;
            model.name = "model" + x + y;
            group.add(model);
        }
    }
    scene.add(group);
    group.rotation.x = Math.PI / 2;
    group.position.set(-80, -3, -100)
    heightCalc()
        //
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
        heightCalc();
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
function heightCalc() {
    //This is constantly setting the height of the water to some noise
    //
    stepCount += 0.0001;
    var i;
    var ipos;
    var offset = stepCount * moveSpeed; //speed
    for (var y = 0; y < 50; y++) {
        for (var x = 0; x < 50; x++) {
            ipos = y + offset;
            var index = (x + y * 50);
            //selecing all kids individually to be at certain heights
            group.children[index].position.z = snoise.noise(ipos / flowControl * noiseScale, x / flowControl * noiseScale, noiseSeed) * heightThickness;
        }
    }
}