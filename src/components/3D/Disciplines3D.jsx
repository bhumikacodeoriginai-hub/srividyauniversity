import React from 'react';
import { Box, Sphere } from '@react-three/drei';

const Disciplines3D = () => {
  return (
    <group>
      {[...Array(6)].map((_, i) => (
        <Box key={i} args={[0.5, 0.5, 0.5]} position={[
          Math.cos((i/6)*Math.PI*2)*2,
          Math.sin((i/6)*Math.PI*2)*1.5,
          0
        ]}>
          <meshStandardMaterial color={['#FF9933','#C5A059','#40E0D0','#E34234','#9B59B6','#2ECC71'][i]} />
        </Box>
      ))}
      <Sphere args={[0.3, 16, 16]}>
        <meshStandardMaterial color="#FF9933" emissive="#FF9933" emissiveIntensity={0.3} />
      </Sphere>
    </group>
  );
};

export default Disciplines3D;
