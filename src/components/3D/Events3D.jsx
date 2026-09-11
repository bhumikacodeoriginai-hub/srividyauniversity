import React from 'react';
import { Torus, Sphere } from '@react-three/drei';

const Events3D = () => {
  return (
    <group>
      {[0,1,2,3].map((i) => (
        <Torus key={i} args={[1.5 + i*0.3, 0.05, 16, 64]} position={[
          Math.cos((i/4)*Math.PI*2)*2,
          Math.sin((i/4)*Math.PI*2)*1.5,
          0
        ]} rotation={[Math.PI/2, 0, i*0.5]}>
          <meshStandardMaterial color={['#FF9933','#C5A059','#40E0D0','#E34234'][i]} emissive={['#FF9933','#C5A059','#40E0D0','#E34234'][i]} emissiveIntensity={0.1} />
        </Torus>
      ))}
      <Sphere args={[0.2, 16, 16]}>
        <meshStandardMaterial color="#FF9933" emissive="#FF9933" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  );
};

export default Events3D;
