import React from 'react';
import { Sphere, Torus } from '@react-three/drei';

const Contact3D = () => {
  return (
    <group>
      {[0,1,2,3,4].map((i) => (
        <Sphere key={i} args={[0.3, 16, 16]} position={[
          Math.cos((i/5)*Math.PI*2)*2.5,
          Math.sin((i/5)*Math.PI*2)*1.5,
          0
        ]}>
          <meshStandardMaterial color={['#FF9933','#C5A059','#40E0D0','#E34234','#9B59B6'][i]} />
        </Sphere>
      ))}
      <Sphere args={[0.2, 16, 16]}>
        <meshStandardMaterial color="#FF9933" emissive="#FF9933" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  );
};

export default Contact3D;
