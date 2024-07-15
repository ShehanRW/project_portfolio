'use client'
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const RotatingBox = () => {
  const myMesh = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (myMesh.current) { // Add null check here
      myMesh.current.rotation.x += delta * 0.1;
      myMesh.current.rotation.y += delta * 0.1;
      myMesh.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <mesh ref={myMesh}>
      <icosahedronGeometry args={[2.8, 1]} />
      <meshStandardMaterial color="orange" flatShading={true} wireframe={true} emissiveIntensity={5}/>
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.21} />
      <hemisphereLight color={"white"}/>
      <directionalLight position={[1, 1, 2]}/>
      <RotatingBox />
    </Canvas>
  );
};

export default ThreeScene;
