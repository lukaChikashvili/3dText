import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import React, { useMemo, useRef, useState } from 'react'
import * as THREE from 'three';

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floorMaterial = new THREE.MeshStandardMaterial({color: 'black'});
const floor2material = new THREE.MeshStandardMaterial({color: 'white'});
const obstacleMaterial = new THREE.MeshStandardMaterial({color: 'red'});
const blockEndMaterial = new THREE.MeshStandardMaterial({color: 'blue'});
const wallMaterial = new THREE.MeshStandardMaterial({color: 'gray'});

export function BlockStart({position = [0, 0, 0]}) {
    return <>
    <group position={position}>
       <mesh  geometry={boxGeometry}  material={floorMaterial}   position = {[0, -0.1, 0]} scale = {[4, 0.2, 4]} receiveShadow >
       
       </mesh>
       </group>
    </>
  }

   export function BlockSpinner({position = [0, 0, 0]}) {

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


  export function BlockLimbo({position = [0, 0, 0]}) {

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


  export function BlockAxe({position = [0, 0, 0]}) {

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


  export function BlockImage({position = [0, 0, 0]}) {

    const obstacleRef = useRef();
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

    useFrame((state) => {
       const time = state.clock.getElapsedTime();

       const y = Math.sin(time + timeOffset) + 1.15;
       obstacleRef.current.setNextKinematicTranslation({x: position[0], y: position[1] + y + 0.75, z:position[2]});

    })

    return <>
    <group position={position}>
       <mesh  geometry={boxGeometry}  material={floorMaterial}   position = {[0, -0.1, 0]} scale = {[4, 0.2, 4]} receiveShadow />
       <RigidBody ref = {obstacleRef} type='kinematicPosition' position = {[0, 0.3, 0]} restitution={0.2} friction={0}>
       <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[ 3.5, 1.5, 0.3 ]} castShadow receiveShadow />
       </RigidBody>
         

       </group>
    </>
  }


  
  export function BlockEnd({position = [0, 0, 0]}) {
    return <>
    <group position={position}>
       <mesh  geometry={boxGeometry}  material={blockEndMaterial}   position = {[0, 0.1, 0]} scale = {[4, 0.2, 4]} receiveShadow >
       
       </mesh>
       </group>
    </>
  }


  function Walls({length = 1}) {
    
    return <>
    <RigidBody type='fixed' restitution={0.2} friction={0}>
       <mesh position = { [2.15, 0.75, - (length * 2) + 2] }
             geometry={boxGeometry}
             material = {wallMaterial}
             scale = { [0.3, 1.5, 4 * length] }
             castShadow
        />

<mesh position = { [-2.15, 0.75, - (length * 2) + 2] }
             geometry={boxGeometry}
             material = {wallMaterial}
             scale = { [0.3, 1.5, 4 * length] }
             receiveShadow
        />

<mesh position = { [0, 0.75, - (length * 4) + 2] }
             geometry={boxGeometry}
             material = {wallMaterial}
             scale = { [4, 1.5, 0.3] }
             receiveShadow
        />
        <CuboidCollider args = { [ 2, 0.1, 2 * length ] }
                        position={ [ 0, -0.1, - (length * 2) + 2] } 
                        restitution={0.2} 
                        friction={1}
                        />
        </RigidBody>
    </>

    
  }

export const Level = ({count = 6, types = [BlockSpinner, BlockAxe, BlockLimbo, BlockImage]}) => {
      
    const blocks = useMemo(() =>
    {
        const blocks = []

        for(let i = 0; i < count; i++)
        {
            const type = types[ Math.floor(Math.random() * types.length) ]
            blocks.push(type)
        }

        return blocks
    }, [ count, types ])
  return (
   <>


        <BlockStart position = { [0, 0, 0] } />
          {blocks.map((Block, index) => <Block key={index} position={ [ 0, 0, - (index + 1) * 4 ] }/>)}

          <BlockEnd position = { [0, 0, - (count + 1) * 4] } />
          <Walls length={count + 2} />
   </>
  )
}

export default Level
