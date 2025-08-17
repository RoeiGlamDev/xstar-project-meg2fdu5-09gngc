import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 'orange' });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Canvas className="absolute inset-0">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl font-bold text-orange-600">luxury LRP cosmetics</h1>
        <p className="mt-4 text-lg text-white">Elevate your beauty routine with our premium cosmetics, designed to inspire luxury and elegance.</p>
      </motion.div>
    </div>
  );
};

export default FloatingElements;