'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import Model from './Model'
import * as THREE from 'three'

export default function SceneContent() {
  const group = useRef<THREE.Group>(null!)
  const scroll = useScroll()

  useFrame(() => {
    const offset = scroll.offset // scroll progress between 0 and 1

    // Animate model rotation and position based on scroll
    if (group.current) {
      group.current.rotation.y = offset * Math.PI * 2
      group.current.position.y = -offset * 2 + 1
    }
  })

  return (
    <group ref={group} rotation={[0, Math.PI / 2, 0]}>
      <Model scale={0.1} position={[0, -0.5, 0]} />
    </group>
  )
}
