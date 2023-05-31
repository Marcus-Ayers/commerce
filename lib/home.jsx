'use client';
import {
  OrbitControls,
  ScrollControls,
  useGLTF,
  useHelper,
  useScroll,
  useTexture
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
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
      <spotLight position={[-4, 4, 1]} intensity={0.4} />

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
  const lightRef = useRef();
  const targetRef = useRef();

  const [position, setPosition] = useState([0.2, -0.5, -1.5]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Equivalent to tailwind's 'md'
        setPosition([0.2, -0.5, -1.5]);
      } else {
        setPosition([-1.2, -0.5, -1.0]);
      }
    };

    // Call once to set initial position
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(() => {
    if (lightRef.current && targetRef.current) {
      lightRef.current.target = targetRef.current;
    }
  });
  const model = useGLTF('/models/snowboardImage2.glb');
  // const model = useGLTF("/models/snowboardDraco.glb");
  return (
    <mesh ref={targetRef} position={position} rotation={[-0.2, 1.2, 0.2]}>
      <primitive object={model.scene} dispose={null} />
      <spotLight ref={lightRef} position={[1, 8, 3]} intensity={0.6} />
    </mesh>
  );
};

const Mountains = () => {
  const model = useGLTF('/models/mountainsDraco7.glb');
  // const model = useGLTF("/models/snowboardDraco.glb");
  return (
    <mesh position={[0.2, -0.5, -1.5]} rotation={[-0.2, 1.2, 0.2]}>
      <primitive object={model.scene} dispose={null} />
      {/* <OrbitControls /> */}
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

  // define mouse state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []); // Empty array ensures that effect is only run on mount and unmount

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

      // Add some rotation based on mouse position
      const mouseLookSpeed = 0.0001; // Adjust this to change the sensitivity
      // camera.rotation.y += (window.innerWidth / 2 - mousePosition.y) * mouseLookSpeed;
      // camera.position.z += (window.innerHeight / 2 - mousePosition.x) * mouseLookSpeed;
    }
  });

  return (
    <>
      <mesh>
        <spotLight position={[10, 9, 0]} intensity={0.08} />
        <ambientLight intensity={0.03} />
        <OrbitControls enableZoom={false} />
        <Model />
        <Mountains />
        <Plane />
      </mesh>
    </>
  );
};

const App = () => {
  return (
    <div className="h-screen">
      {/* <FPSStats /> */}
      <Canvas camera={{ fov: 75, position: [2, 1, 0] }}>
        <ScrollControls>
          <Square />
          <color args={['black']} attach="background" />
        </ScrollControls>
        <PageContent />
      </Canvas>
    </div>
  );
};

export default function HomePageThree() {
  return (
    <>
      <App />
    </>
  );
}
