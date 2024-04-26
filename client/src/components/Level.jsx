import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import React, { useRef, useState } from 'react'
import * as THREE from 'three';


const Level = () => {

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const floorMaterial = new THREE.MeshStandardMaterial({color: 'black'});
    const floor2material = new THREE.MeshStandardMaterial({color: 'white'});
    const obstacleMaterial = new THREE.MeshStandardMaterial({color: 'red'});



  function BlockStart({position = [0, 0, 0]}) {
    return <>
    <group position={position}>
       <mesh  geometry={boxGeometry}  material={floorMaterial}   position = {[0, -0.1, 0]} scale = {[4, 0.2, 4]} receiveShadow >
       
       </mesh>
       </group>
    </>
  }

  function BlockSpinner({position = [0, 0, 0]}) {

    const obstacleRef = useRef();

    useFrame((state) => {
       const time = state.clock.getElapsedTime();

       const rotation = new THREE.Quaternion();
       rotation.setFromEuler(new THREE.Euler(0, time, 0));
       obstacleRef.current.setNextKinematicRotation(rotation);


    })

    return <>
    <group position={position}>
       <mesh  geometry={boxGeometry}  material={floor2material}   position = {[0, -0.1, 0]} scale = {[4, 0.2, 4]} receiveShadow />
       <RigidBody ref = {obstacleRef} type='kinematicPosition' position = {[0, 0.3, 0]} restitution={0.2} friction={0}>
       <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[ 3.5, 0.3, 0.3 ]} castShadow receiveShadow />
       </RigidBody>
         

       </group>
    </>
  }


  function BlockLimbo({position = [0, 0, 0]}) {

    const obstacleRef = useRef();
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

    useFrame((state) => {
       const time = state.clock.getElapsedTime();

      const y = Math.sin(time + timeOffset) + 1.15;
      obstacleRef.current.setNextKinematicTranslation({x: position[0], y: position[1] + y, z:position[2]});

    })

    return <>
    <group position={position}>
       <mesh  geometry={boxGeometry}  material={floorMaterial}   position = {[0, -0.1, 0]} scale = {[4, 0.2, 4]} receiveShadow />
       <RigidBody ref = {obstacleRef} type='kinematicPosition' position = {[0, 0.3, 0]} restitution={0.2} friction={0}>
       <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[ 3.5, 0.3, 0.3 ]} castShadow receiveShadow />
       </RigidBody>
         

       </group>
    </>
  }


  function BlockAxe({position = [0, 0, 0]}) {

    const obstacleRef = useRef();
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

    useFrame((state) => {
       const time = state.clock.getElapsedTime();

      const x = Math.sin(time + timeOffset);
      obstacleRef.current.setNextKinematicTranslation({x: position[0] + x, y: position[1] + 0.75, z:position[2]});

    })

    return <>
    <group position={position}>
       <mesh  geometry={boxGeometry}  material={floor2material}   position = {[0, -0.1, 0]} scale = {[4, 0.2, 4]} receiveShadow />
       <RigidBody ref = {obstacleRef} type='kinematicPosition' position = {[0, 0.3, 0]} restitution={0.2} friction={0}>
       <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[ 1.5, 1.5, 0.3 ]} castShadow receiveShadow />
       </RigidBody>
         

       </group>
    </>
  }


  return (
   <>


        <BlockStart position = { [0, 0, 12] } />
        <BlockSpinner position={ [0, 0, 8]  } />
        <BlockLimbo position={ [0, 0, 4]  } />
        <BlockAxe position={ [0, 0, 0]  } />
   </>
  )
}

export default Level
