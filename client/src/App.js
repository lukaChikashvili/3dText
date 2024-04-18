import { Canvas } from '@react-three/fiber';


function App() {

  

  return (
    <div className="App">
       <Canvas>
        <mesh position-x = {-2}>
          <sphereGeometry />
          <meshBasicMaterial color = "purple" />
        </mesh>

 <mesh rotation-y = {Math.PI * 0.025} position-x = {2} scale = {1.5}>
  <boxGeometry />
  <meshBasicMaterial color = "orange" />
 </mesh>

           <mesh position-y = {-1} rotation-x = {-Math.PI * 0.5} scale = {10}>
             <planeGeometry />
             <meshBasicMaterial color = "greenYellow" />
           </mesh>
       </Canvas>
    </div>
  );
}

export default App;
