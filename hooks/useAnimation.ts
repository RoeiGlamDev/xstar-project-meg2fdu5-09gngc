import { useEffect, useState } from 'react';

/
 * Custom hook to manage luxury animations for the luxury LRP cosmetics website.
 * This hook will provide elegant and smooth animations to enhance the user experience.
 * 
 * @returns {Object} - An object containing animation state and control functions.
 */
export interface AnimationState {
    isVisible: boolean;
    toggleVisibility: () => void;
    startAnimation: () => void;
    stopAnimation: () => void;
}

export function useAnimation(): AnimationState {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [animationClass, setAnimationClass] = useState<string>('');

    /
     * Toggles the visibility of the animated element.
     */
    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
    };

    /
     * Starts the animation by setting the appropriate class.
     */
    const startAnimation = () => {
        setAnimationClass('luxury-animation');
        setIsVisible(true);
    };

    /
     * Stops the animation and hides the element.
     */
    const stopAnimation = () => {
        setAnimationClass('');
        setIsVisible(false);
    };

    // Effect to handle animation cleanup
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setAnimationClass('');
            }, 1000); // Duration of the animation

            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return {
        isVisible,
        toggleVisibility,
        startAnimation,
        stopAnimation,
    };
}