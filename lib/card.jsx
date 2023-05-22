'use client';
import { animated, useSpring } from '@react-spring/three';
import { useGLTF, useHelper } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { DirectionalLightHelper } from 'three';

const Model2 = ({ modelPath, initialRotation }) => {
  const model2 = useGLTF(modelPath);

  return (
    <mesh position={[0, -3, 0]} rotation={initialRotation} scale={3}>
      <primitive object={model2.scene} dispose={null} />;
    </mesh>
  );
};

const SnowboardFlip = ({ position, model, rotationn }) => {
  const directionalLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, 'black');

  const cubeRef = useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const randomRotationFactor = useRef(Math.random() * 0.002).current;
  const randomPositionFactor = useRef(Math.random() * 0.07).current;

  const { rotation } = useSpring({
    rotation: active
      ? [0, Math.PI, 0]
      : hovered
      ? [0, 0.2, 0] // use the rotation value when hovered
      : [0, 0, 0], // use the initial rotation value when not hovered and not active
    config: { mass: 5, tension: 200, friction: 50 }
  });

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += randomRotationFactor; // This will continually rotate the object at random speed
      cubeRef.current.position.y =
        randomPositionFactor * Math.sin(state.clock.elapsedTime * 2) + position[1]; // This will create the bobbing up and down effect at random rate
    }
  });

  return (
    <>
      <directionalLight position={[0, 0, 3]} intensity={0.2} />
      <ambientLight intensity={0.1} />

      <animated.mesh
        ref={cubeRef}
        rotation={rotation}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={position}
      >
        <Model2 modelPath={model} initialRotation={rotationn} />
        <meshBasicMaterial />
        <boxBufferGeometry attach="geometry" args={[1, 5, 1]} />
        <meshBasicMaterial attach="material" transparent opacity={0} />{' '}
      </animated.mesh>
    </>
  );
};

const Page2 = () => {
  return (
    <div className="h-[500px] overflow-hidden" style={{ height: '500px', marginLeft: '-150px' }}>
      <Canvas style={{ background: 'transparent' }}>
        {/* <color attach="background" args={["black"]} /> */}

        <SnowboardFlip
          model="/models/snowboardDraco.glb"
          position={[-2, 0.5, 0.25]}
          rotationn={[0, -1.5, 0]}
        />
        <SnowboardFlip
          model="/models/snowboardDracoNew.glb"
          position={[-6.2, 0.3, 0]}
          rotationn={[0, -1.3, 0]}
        />
        <SnowboardFlip
          model="/models/snowboardDracoNew2.glb"
          position={[1.5, 0.3, 0.25]}
          rotationn={[0, -1.7, 0]}
        />
      </Canvas>
    </div>
  );
};
export default Page2;
