import React from 'react'
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx'



function App() {

  return <>

    <div className='main'>


      <Canvas className='canvas'
        shadows camera={{ position: [4, 0, -12], fov: 75 }}
      >
        <Experience />
        <ambientLight />
      </Canvas>



      <div className='about-text'>

        <div className='about-top'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Facilisis sed odio morbi quis commodo. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Risus nullam eget felis eget.
          Eleifend quam adipiscing vitae proin sagittis. In pellentesque massa placerat duis ultricies lacus sed. Faucibus nisl tincidunt eget nullam non.
          Vitae congue mauris rhoncus aenean. Cursus metus aliquam eleifend mi in nulla. Vel quam elementum pulvinar etiam non quam.
          Pellentesque eu tincidunt tortor aliquam nulla facilisi. Vivamus at augue eget arcu dictum varius duis.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Dignissim diam quis enim lobortis scelerisque fermentum.</div>

        <div className='about-bottom'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Facilisis sed odio morbi quis commodo. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Risus nullam eget felis eget.
          Eleifend quam adipiscing vitae proin sagittis. In pellentesque massa placerat duis ultricies lacus sed. Faucibus nisl tincidunt eget nullam non.
          Vitae congue mauris rhoncus aenean. Cursus metus aliquam eleifend mi in nulla. Vel quam elementum pulvinar etiam non quam.
          Pellentesque eu tincidunt tortor aliquam nulla facilisi. Vivamus at augue eget arcu dictum varius duis.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Dignissim diam quis enim lobortis scelerisque fermentum.</div>

      </div>

    </div>


  </>


}

export default App;