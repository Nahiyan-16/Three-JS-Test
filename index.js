const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x808080 } );
const cube = new THREE.Mesh( geometry, material );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light , cube);

camera.position.z = 5

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;

    renderer.render( scene, camera );
};

animate();