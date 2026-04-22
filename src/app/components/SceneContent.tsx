'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import Model from './Model'

interface SceneContentProps {
  progress: number
}

export default function SceneContent({ progress }: SceneContentProps) {
  const group = useRef<THREE.Group>(null!)

  useFrame((_, delta) => {
    if (!group.current) return

    const targetRotationY = Math.PI / 2 + progress * Math.PI * 1.08
    const targetRotationX = Math.sin(progress * Math.PI) * 0.12
    const targetY = 0.0 - progress * 1.2
    const targetX = 0.18 + Math.sin(progress * Math.PI * 1.35) * 0.16

    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, delta * 2.5)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, delta * 1.8)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, delta * 2)
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, delta * 1.6)
  })

  return (
    <group ref={group}>
      <Model scale={0.085} position={[0.05, 0.0, -0.1]} />
    </group>
  )
}
