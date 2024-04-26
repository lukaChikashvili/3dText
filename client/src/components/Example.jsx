import Level from "./Level"
import Lights from "./Lights"
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier';




const Example = () => {

 
  return (
    <>

      <OrbitControls makeDefault/>
      <Physics>

      <Lights />

      <Level />
      </Physics>
           </>
  )
}

export default Example
