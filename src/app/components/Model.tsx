'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import * as THREE from 'three'

// Use React.ComponentProps<'group'> for group props in react-three-fiber
interface ModelProps extends React.ComponentProps<'group'> {
  path?: string
}

const DEFAULT_PATH = '/models/David.glb'

function Model({ path = DEFAULT_PATH, ...props }: ModelProps) {
  const group = useRef<THREE.Group>(null!)
  const { scene } = useGLTF(path)

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.3
  })

  return (
    <group ref={group} {...props}>
      <primitive object={scene} dispose={null} />
    </group>
  )
}

export default memo(Model)
useGLTF.preload(DEFAULT_PATH)
