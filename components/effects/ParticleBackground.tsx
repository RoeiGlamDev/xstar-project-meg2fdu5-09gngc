import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const particles: THREE.Points[] = [];
        const particleCount = 1000;

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  10;
            positions[i  3 + 1] = (Math.random() - 0.5)  10;
            positions[i  3 + 2] = (Math.random() - 0.5)  10;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({ color: 0xffa500, size: 0.05 });
        const particlesMesh = new THREE.Points(geometry, material);
        scene.add(particlesMesh);
        particles.push(particlesMesh);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            particles.forEach((particle) => {
                particle.rotation.x += 0.001;
                particle.rotation.y += 0.001;
            });
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="absolute inset-0">
            <motion.div
                className="flex items-center justify-center h-screen bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <h1 className="text-5xl font-bold text-orange-600">Welcome to luxury LRP cosmetics</h1>
            </motion.div>
        </div>
    );
};

export default ParticleBackground;