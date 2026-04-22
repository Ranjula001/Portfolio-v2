'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useGLTF, SpotLight } from '@react-three/drei'
import { memo } from 'react'
import * as THREE from 'three'

interface CoinProps {
  position?: [number, number, number]
}

function CoinModel({ position = [0, 0, 0] }: CoinProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const { scene } = useGLTF('/models/ancient_coin_003.glb')

  useFrame((state, delta) => {
    if (!groupRef.current) return

    // Simple, performant spinning animation
    groupRef.current.rotation.y += delta * 2
  })

  return (
    <group ref={groupRef} position={position}>
      <primitive object={scene} dispose={null} scale={[0.3, 0.3, 0.3]} />
    </group>
  )
}

const Coin = memo(CoinModel)

// Preload the model for better performance
useGLTF.preload('/models/ancient_coin_003.glb')

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loading screen for 7 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* 3D Canvas for coin - full screen */}
      <div className="w-full h-full flex items-center justify-center">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          className="w-full h-full"
          gl={{ antialias: false, alpha: false }}
          dpr={[1, 1]}
          shadows={false}
          performance={{ min: 0.5, max: 1 }}
          frameloop="always"
        >
          {/* Enhanced lighting setup */}
          <ambientLight intensity={0.8} />
          
          {/* Main spotlight */}
          <SpotLight
            position={[0, 6, 0]}
            angle={0.4}
            penumbra={0.2}
            intensity={8}
            color="#FFD700"
            target-position={[0, 0, 0]}
          />
          
          {/* Additional spotlights for better visibility */}
          <SpotLight
            position={[3, 4, 3]}
            angle={0.5}
            penumbra={0.3}
            intensity={4}
            color="#FFA500"
            target-position={[0, 0, 0]}
          />
          <SpotLight
            position={[-3, 4, -3]}
            angle={0.5}
            penumbra={0.3}
            intensity={4}
            color="#FFD700"
            target-position={[0, 0, 0]}
          />
          
          {/* Point lights for all-around illumination */}
          <pointLight position={[2, 2, 2]} intensity={3} color="#FFD700" />
          <pointLight position={[-2, 2, -2]} intensity={3} color="#FFA500" />
          
          {/* Coin */}
          <Coin position={[0, 0, 0]} />
        </Canvas>
      </div>

      {/* Text overlay - single line */}
      <div className="absolute bottom-20 left-0 right-0 text-center px-8">
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-widest">
          He gives without speaking, builds without showing, and rises without asking.
        </p>
      </div>
    </div>
  )
}
