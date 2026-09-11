import React from 'react';
import { Sphere, Cone } from '@react-three/drei';

const Faculty3D = () => {
  return (
    <group>
      {[0,1,2,3].map((i) => (
        <group key={i} position={[
          Math.cos((i/4)*Math.PI*2)*2.5,
          Math.sin((i/4)*Math.PI*2)*1.5,
          0
        ]}>
          <Sphere args={[0.3, 16, 16]} position={[0, 0.3, 0]}>
            <meshStandardMaterial color={['#FF9933','#C5A059','#40E0D0','#9B59B6'][i]} />
          </Sphere>
          <Cone args={[0.4, 0.8, 8]} position={[0, -0.1, 0]}>
            <meshStandardMaterial color={['#FF9933','#C5A059','#40E0D0','#9B59B6'][i]} emissive={['#FF9933','#C5A059','#40E0D0','#9B59B6'][i]} emissiveIntensity={0.1} />
          </Cone>
        </group>
      ))}
    </group>
  );
};

export default Faculty3D;
