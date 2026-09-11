import React from 'react';
import { Sphere, Torus } from '@react-three/drei';

const About3D = () => {
    return (
        <group>
            <Sphere args={[1.2, 32, 32]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={0.2} metalness={0.7} roughness={0.3} />
            </Sphere>
            <Torus args={[1.8, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#FF9933" emissive="#FF9933" emissiveIntensity={0.2} />
            </Torus>
        </group>
    );
};

export default About3D;