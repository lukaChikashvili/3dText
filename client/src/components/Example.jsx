import Level from "./Level";
import Lights from "./Lights"
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier';
import Player from "./Player";




const Example = () => {

 
  return (
    <>

      <OrbitControls makeDefault/>
      <Physics>

      <Lights />

      <Level   />
      <Player />
      </Physics>
           </>
  )
}

export default Example
