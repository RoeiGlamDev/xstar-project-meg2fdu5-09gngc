import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * use3D is a custom hook that initializes and manages a 3D scene for luxury LRP cosmetics.
 * It provides interactive elements that enhance the luxury shopping experience.
 * 
 * @returns {object} An object containing the 3D scene, camera, and renderer.
 */
export const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        // Initialize the scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Set up camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        cameraRef.current = camera;

        // Set up renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff, 1); // White background
        document.body.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Add lighting for luxury effect
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffa500, 1); // Orange light
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // Create a luxury LRP cosmetics product display (for example, a rotating bottle)
        const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
        const material = new THREE.MeshPhongMaterial({ color: 0xffa500 }); // Orange material
        const cylinder = new THREE.Mesh(geometry, material);
        scene.add(cylinder);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cylinder.rotation.y += 0.01; // Rotate for effect
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            if (cameraRef.current && rendererRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
                rendererRef.current.setSize(window.innerWidth, window.innerHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        // Clean up on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                document.body.removeChild(rendererRef.current.domElement);
            }
        };
    }, []);

    return { scene: sceneRef.current, camera: cameraRef.current, renderer: rendererRef.current };
};