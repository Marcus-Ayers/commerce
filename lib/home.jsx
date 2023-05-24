'use client';
import {
  Environment,
  OrbitControls,
  ScrollControls,
  useGLTF,
  useHelper,
  useScroll,
  useTexture
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import FPSStats from 'react-fps-stats';
import * as THREE from 'three';
import { Color, DirectionalLightHelper } from 'three';
import { PageContent } from '../lib/html';

const Plane = () => {
  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   fetchAllProducts()
  //     .then((products) => setProducts(products))
  //     .catch((error) => console.error('Failed to fetch products:', error));
  // }, []);

  const marbleTexture = useTexture('/images/marble.jpeg');
  marbleTexture.wrapS = marbleTexture.wrapT = THREE.RepeatWrapping;
  marbleTexture.repeat.set(10, 10);
  const directionalLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, new Color('red'));

  return (
    <>
      {/* <Environment background files={'/images/lights2.hdr'} blur={0.07} /> */}
      <directionalLight position={[-4, 4, 1]} intensity={0.1} />
      <mesh
        position-y={-0.5}
        position-z={1}
        rotation-x={-Math.PI * 0.5}
        scale={30}
        envMapIntensity={0.1}
      >
        <planeGeometry />
        <meshStandardMaterial
          color="white"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          map={marbleTexture}
        />
      </mesh>
    </>
  );
};

const Model = () => {
  const model = useGLTF('/models/snowboardImage2.glb');
  // const model = useGLTF("/models/snowboardDraco.glb");
  return (
    <mesh position={[0.2, -0.5, -1.5]} rotation={[-0.2, 1.2, 0.2]}>
      <primitive object={model.scene} dispose={null} />;
    </mesh>
  );
};

const Square = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  const [cameraPosition, setCameraPosition] = useState({
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z
  });
  const [cameraRotation, setCameraRotation] = useState({
    x: camera.rotation.x,
    y: camera.rotation.y,
    z: camera.rotation.z
  });

  useFrame(() => {
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    camera.rotation.set(cameraRotation.x, cameraRotation.y, cameraRotation.z);
    camera.updateProjectionMatrix();
    if (scroll && scroll.offset) {
      const radius = 2;
      const angle = scroll.offset * 2 * Math.PI * 0.02 + 1.57;

      const x = radius * Math.sin(angle);
      const z = radius * Math.cos(angle);

      camera.position.set(x, camera.position.y, z);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  });
  return (
    <>
      <mesh>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <Model />
        <Plane />
      </mesh>
    </>
  );
};

const App = () => {
  return (
    <div className="h-screen">
      <FPSStats />
      <Canvas camera={{ fov: 75, position: [2, 1, 0] }}>
        <ScrollControls>
          <Square />
          <color args={['black']} attach="background" />
        </ScrollControls>
        <PageContent />
      </Canvas>
      {/* <Suspense>
        <Carousel />
      </Suspense> */}
    </div>
  );
};

export default function HomePageThree() {
  return <App />;
}
