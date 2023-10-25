import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earth from './images/earth.jpg';
import sun from './images/sun.jfif';
import night_sky from './images/night_sky.jpg';
import textureNormal from './images/textureNormal.png';

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.render(scene, camera);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);
const geometry = new THREE.BoxGeometry(10, 10, 10);
//set the color of the basic material in the object parameters `{}`
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.z = -15;
cube.position.x = -15;
cube.rotation.x = 2;
cube.rotation.y = .5;
const ico = new THREE.IcosahedronGeometry(10);
const icoMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const icoMesh = new THREE.Mesh(ico, icoMaterial);
scene.add(icoMesh);
icoMesh.position.z= -15;
icoMesh.position.x= 15;
// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(0, -10, 10);
const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);
const directionLight = new THREE.DirectionalLight(0xffffff, 2)
directionLight.position.z=-3;
scene.add(pointLight);
scene.add(ambientLight);
scene.add(directionLight);

// Helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper)
const gridHelper = new THREE.GridHelper(200,50);
scene.add(gridHelper)
const controls = new OrbitControls(camera, renderer.domElement)
const spaceTexture = new THREE.TextureLoader().load(`${night_sky}`)
scene.background = spaceTexture;
// Object texture mapping
const smileTexture = new THREE.TextureLoader().load(`${earth}`)
const sphereGeometry = new THREE.SphereGeometry( 10, 22, 10 );
const smileMaterial = new THREE.MeshBasicMaterial({map: smileTexture})
const smileMesh = new THREE.Mesh(sphereGeometry, smileMaterial);
scene.add(smileMesh);

const sphereGeometry2 = new THREE.SphereGeometry( 13, 22, 8 );
const sunTexture = new THREE.TextureLoader().load(`${sun}`)
const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture})
const sunMesh = new THREE.Mesh(sphereGeometry2, sunMaterial);
scene.add(sunMesh);
sunMesh.position.set(20,20,20)


const normalTexture = new THREE.TextureLoader().load(`${textureNormal}`);
// Normal Texture Map
const torusGeo = new THREE.TorusKnotGeometry( 5, 1, 250, 5, 9, 15 );
const torusMaterial = new THREE.MeshStandardMaterial( {
    normalMap: normalTexture,
    roughness: 0,
    metalness: .8
} );
const torusKnot = new THREE.Mesh( torusGeo, torusMaterial );
scene.add( torusKnot );
torusKnot.position.y = 20
function animate() {
    requestAnimationFrame( animate );
    // slowly rotate the cube:
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // rotate the icosahedron a little faster in the opposite direction:
    icoMesh.rotation.z += -0.03
    icoMesh.rotation.y += -0.03
    // rotate the smiley sphere on the Y axis:
    smileMesh.rotation.y += 0.05
    sunMesh.rotation.y +=0.01
    controls.update()
    torusKnot.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();












