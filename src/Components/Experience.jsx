import { Center, OrbitControls, PresentationControls, CameraShake, Stage, Html, useMatcapTexture, Float } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import Robot from './Robot.jsx'
import { useControls } from 'leva'
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three'



export default function Experience() {

    // const { position } = useControls("Presentation", {
    //     position: {
    //         value: { x: -0.1, y: -1.2, z: 1 },
    //         min: -4,
    //         max: 4,
    //         step: 0.1, // Increment values for the slider 
    //     },
    // })


    const groupDoughnuts = useRef()
    const donuts = useRef([])
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
    const [torusGeometry, setTorusGeometry] = useState()
    const [material, setMaterial] = useState()

    useFrame((state, delta) => {

        // Animation Method 1
        // for (const donut of groupDoughnuts.current.children) {
        //     donut.rotation.y += delta
        // }

        groupDoughnuts.current.rotation.y += delta * 0.2

    })

    function Rig({ children }) {
        const ref = useRef()
        const vec = new THREE.Vector3()
        const { camera, mouse } = useThree()
        useFrame((state, delta) => {
            camera.position.lerp(vec.set(2, 1, 4.5), 0.05)
            // ref.current.rotation.y += delta
            // ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
            // ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
        })
        return <group ref={ref}>{children}</group>
    }






    return <>

        {/* <torusGeometry ref={setTorusGeometry} scale={0.1} args={[1, 0.1, 16, 32]} /> */}
        <boxGeometry ref={setTorusGeometry} scale={1} args={[1, 1, 1]} />
        {/* <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} /> */}
        <meshStandardMaterial ref={setMaterial} color="red" toneMapped={false} />

        <Center>

            <Rig>

                <Stage intensity={1.5} environment="city" shadows={{ type: 'accumulative', opacity: 2 }} adjustCamera={0.9}>

                    <PresentationControls
                        global
                        polar={[-0.1, -1.2]}
                        azimuth={[-1, 0.75]}
                        config={{ mass: 2, tension: 400 }}
                        snap={{ mass: 4, tension: 400 }}
                    >

                        <Float
                            speed={1} // Animation speed, defaults to 1
                            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                            floatingRange={[0, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                        >
                            <group position={[0, -1, 0]}>
                                <Robot scale={.5} />
                            </group>
                        </Float>

                    </PresentationControls>

                </Stage>

            </Rig>

            <group ref={groupDoughnuts} position={[0, 3, 0]}>
                {[...Array(100)].map((value, index) =>
                    <mesh
                        key={index}
                        ref={(element) => donuts.current[index] = element}
                        geometry={torusGeometry}
                        material={material}
                        position={[
                            (Math.random() - 0.5) * 15,
                            (Math.random() - 0.5) * 15,
                            (Math.random() - 0.5) * 15
                        ]}
                        scale={0.2 + Math.random() * 0.2}
                        rotation={[
                            Math.random() * Math.PI,
                            Math.random() * Math.PI,
                            0
                        ]}
                    />
                )}
            </group>

        </Center>









        {/* <Text font="./fonts/Montserrat/Montserrat-Medium.ttf" fontSize={.3} color="gold" position={[-7, 0, 0]} maxWidth={5} lineHeight={1.2}  >
            Welcome to my portfolio site. I am an aspiring junior web developer with a passion for the field. My expertise is in Javascript and CSS, and I am currently learning React and Node frameworks. I have basic knowledge of PHP and SQL.

        </Text> */}

        <EffectComposer>
            <Bloom
                mipmapBlur
                intensity={.5}
                luminanceThreshold={0}
            />
        </EffectComposer>



        <OrbitControls enableZoom={false} />



        {/* <CameraShake
            maxYaw={0.1} // Max amount camera can yaw in either direction
            maxPitch={0.1} // Max amount camera can pitch in either direction
            maxRoll={0.1} // Max amount camera can roll in either direction
            yawFrequency={0.1} // Frequency of the the yaw rotation
            pitchFrequency={0.1} // Frequency of the pitch rotation
            rollFrequency={0.1} // Frequency of the roll rotation
            intensity={0.75} // initial intensity of the shake
            decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
        /> */}



    </>

}