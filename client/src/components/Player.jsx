import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier'
import React from 'react'


const Player = () => {
  
    const [subscribeKeys, getKeys] = useKeyboardControls();

    useFrame(() => {
      const [forward, backwar, righward, leftward] = getKeys();
    })

  return (
    <>
    <RigidBody position={[0, 1, 0]} restitution={0.2} friction={1}>
      <mesh castShadow>
         <icosahedronGeometry args = { [0.3, 1 ] } />
         <meshStandardMaterial flatShading color = "orange" />
      </mesh>
      </RigidBody>
    </>
  )
}

export default Player
