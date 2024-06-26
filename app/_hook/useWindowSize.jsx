import { useState, useEffect } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        x: undefined,
        y: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                x: window.scrollX,
                y: window.scrollY,
            });
        }

        window.addEventListener("scroll", handleResize);

        handleResize();

        return () => window.removeEventListener("scroll", handleResize);
    }, []);
    return windowSize;
}

export default useWindowSize