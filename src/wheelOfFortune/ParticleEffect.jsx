import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import { Vector3 } from 'three';
import { BufferAttribute } from "three";

export default function ParticleEffect({ count = 10000 }) {
  const particleSystem = useRef(null);

  const velocities = useMemo(() => {
    const v = new Array(count).fill(0).map(() => {
      return new Vector3(
        (Math.random() - 0.5) * 0.02, // random x velocity
        (Math.random() - 0.5) * 0.02, // random y velocity
        (Math.random() - 0.5) * 0.02  // random z velocity
      );
    });
    return v;
  }, [count]);

  useFrame(() => {
    const positions = particleSystem.current.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const velocity = velocities[Math.floor(i / 3)];
      positions[i] += velocity.x*5;
      positions[i + 1] += velocity.y*5;
      positions[i + 2] += velocity.z*5;
    }

    particleSystem.current.geometry.attributes.position.needsUpdate = true;
  });

  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (1 - Math.random()) * 2);
    return new BufferAttribute(new Float32Array(p), 3);
  }, [count]);

  return (
    <>
      <points ref={particleSystem}>
        <bufferGeometry  >
          <bufferAttribute attach={"attributes-position"} {...points} />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          threshold={0.5}
          color={"gold"}
          sizeAttenuation={true}
        />
      </points>
    </>
  );
}