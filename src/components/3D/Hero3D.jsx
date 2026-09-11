import React from 'react';
import { Sphere, Torus } from '@react-three/drei';

const Hero3D = () => {
    return (
        <group>
            {/* Floating Particles */}
            {[...Array(80)].map((_, i) => (
                <mesh key={i} position={[
                    (Math.random() - 0.5) * 12,
                    (Math.random() - 0.5) * 8,
                    (Math.random() - 0.5) * 8
                ]}>
                    <sphereGeometry args={[0.03, 4, 4]} />
                    <meshStandardMaterial
                        color="#FF9933"
                        emissive="#FF9933"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.4 + Math.random() * 0.4}
                    />
                </mesh>
            ))}
        </group>
    );
};

export default Hero3D;