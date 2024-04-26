import React from 'react'
import * as THREE from 'three';


const Level = () => {

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const floorMaterial = new THREE.MeshStandardMaterial({color: 'black'});
    const floor2material = new THREE.MeshStandardMaterial({color: 'white'})


  function BlockStart({position = [0, 0, 0]}) {
    return <>
    <group position={position}>
       <mesh  geometry={boxGeometry}  material={floorMaterial}   position = {[0, -0.1, 0]} scale = {[4, 0.2, 4]} receiveShadow >
        
         
       </mesh>
       </group>
    </>
  }

  function BlockSpinner({position = [0, 0, 0]}) {
    return <>
    <group position={position}>
       <mesh  geometry={boxGeometry}  material={floor2material}   position = {[0, -0.1, 0]} scale = {[4, 0.2, 4]} receiveShadow >
        
         
       </mesh>
       </group>
    </>
  }


  return (
   <>


        <BlockStart position = { [0, 0, 4] } />
        <BlockSpinner position={ [0, 0, 0]  } />
   </>
  )
}

export default Level
