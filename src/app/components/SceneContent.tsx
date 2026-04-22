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

    const targetRotationY = Math.PI / 2 + progress * Math.PI * 1.35
    const targetRotationX = Math.sin(progress * Math.PI) * 0.18
    const targetY = 0.8 - progress * 2.6
    const targetX = Math.sin(progress * Math.PI * 2) * 0.35

    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, delta * 2.5)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, delta * 1.8)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, delta * 2)
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, delta * 1.6)
  })

  return (
    <group ref={group}>
      <Model scale={0.1} position={[0, -0.4, 0]} />
    </group>
  )
}
