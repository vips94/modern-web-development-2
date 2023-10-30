import React, {useState, useEffect} from 'react';

const useMousePosition = () => {

    const [mousePosition, setMousePosition] = useState({x:0,y:0});

    const updateMousePosition = (e:any) => {
        const x = e.clientX;
        const y = e.clientY;

        setMousePosition({x:x,y:y})
    }

    useEffect(()=>{
        window.addEventListener('mousemove', updateMousePosition)

        return ()=> window.removeEventListener('mousemove', updateMousePosition)
    },[])

    return mousePosition;
};

export default useMousePosition;