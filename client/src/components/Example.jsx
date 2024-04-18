import { Center, OrbitControls, Text3D, useGLTF, useMatcapTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
;



const Example = () => {

  const [ nameTexture ] = useMatcapTexture('54584E_B1BAC5_818B91_A7ACA3', 256);
  const [ sphere ] = useMatcapTexture('6E5137_E8CA90_271912_B99C74', 256);

  const model = useGLTF('./web.glb');

   let groupRef = useRef();

   useFrame((state, delta) => {
        for(const donut of groupRef.current.children) {
          donut.position.y += delta * 0.1;
       
        }
   })

  return (
    <>
      <OrbitControls makeDefault/>

      <directionalLight castShadow position = { [1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />


 <Center>
 <Text3D font = './helvetiker_regular.typeface.json'
         size = {1.6} height = {0.2}
         curveSegments={12} bevelEnabled bevelThickness={0.25}
         bevelSize={0.02} bevelOffset={0} bevelSegments={5}
 >
    Luka 
    <meshMatcapMaterial matcap={nameTexture} />
 </Text3D>
 <Text3D font = './helvetiker_regular.typeface.json'
         size = {1.6} position-y = {-3} height = {0.2}
         curveSegments={12} bevelEnabled bevelThickness={0.25}
         bevelSize={0.02} bevelOffset={0} bevelSegments={5}
 >
    CHikashvili 
    <meshMatcapMaterial matcap={nameTexture} />
 </Text3D>
 
 </Center>
      <group ref = {groupRef}>
      {[...Array(300)].map((index) => 
 <mesh key={index} position = { [
      (Math.random() - 0.5 ) * 30,
      (Math.random() - 0.5 ) * 30,
      (Math.random() - 0.5 ) * 10,
 ]} scale={0.3 + Math.random() * 0.02} rotation={ [
     Math.random() * Math.PI,
     Math.random() * Math.PI,
     0

 ]}>
 <boxGeometry />
 <meshMatcapMaterial matcap={sphere}/>
</mesh>

      )}
     </group>
           </>
  )
}

export default Example
