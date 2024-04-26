import { Canvas, } from '@react-three/fiber';

import Example from './components/Example';


function App() {

  
  return (
    <div className="App">
        <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 2.5, 4, 6 ]
        } }
    >
        <Example />
          </Canvas>
    </div>
  );
}

export default App;
