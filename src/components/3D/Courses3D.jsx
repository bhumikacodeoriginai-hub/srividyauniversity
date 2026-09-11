import React from 'react';
import { Cylinder, Torus } from '@react-three/drei';

const Courses3D = () => {
  return (
    <group>
      {[0,1,2,3].map((i) => (
        <group key={i} position={[i*1.5-2.25, 0, 0]}>
          <Cylinder args={[0.4, 0.5, 1.5, 16]} position={[0, 0.75, 0]}>
            <meshStandardMaterial color={['#FF9933','#C5A059','#40E0D0','#E34234'][i]} />
          </Cylinder>
          <Torus args={[0.6, 0.03, 16, 32]} position={[0, 0.3, 0]} rotation={[Math.PI/2, 0, 0]}>
            <meshStandardMaterial color={['#FF9933','#C5A059','#40E0D0','#E34234'][i]} emissive={['#FF9933','#C5A059','#40E0D0','#E34234'][i]} emissiveIntensity={0.2} />
          </Torus>
        </group>
      ))}
    </group>
  );
};

export default Courses3D;
