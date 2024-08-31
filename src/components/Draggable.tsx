import { useRef, useState, PropsWithChildren, useEffect } from "react";
import "./Draggable.css";

interface DraggableProps {
    snapBack : boolean;
}

function Draggable(props : PropsWithChildren<DraggableProps>) {

    const draggableRef = useRef<HTMLDivElement>(null);
    const [xOffset, setXOffset] = useState((Math.random() - 0.5) * 250);
    const [yOffset, setYOffset] = useState((Math.random() - 0.5) * 250);
    const [xVelocity, setXVelocity] = useState(0);
    useEffect(() => {

        let isDragging = false;

        setXVelocity((Math.random() - 0.5) * 250 / 10);

        const div = draggableRef && draggableRef.current;

        function animateBack() {
            if(!isDragging) {
                if(props.snapBack) {
                    setXOffset(xOffset => xOffset * 0.90);
                    setYOffset(yOffset => yOffset * 0.90);
                }
                
                setXVelocity(xVelocity => xVelocity * 0.90);
            }
        }

        const animateBackInterval = setInterval(animateBack, 1000 / 40);

        function handleMouseMove(e : MouseEvent) {
            setXVelocity(xVelocity => 0.90 * xVelocity + 0.10 * -e.movementX);
            setXOffset(xOffset => xOffset + e.movementX);
            setYOffset(yOffset => yOffset + e.movementY);
        }

        function onMouseDown(e : MouseEvent) {
            const div = draggableRef && draggableRef.current;
            if(div) {
                if(e.target instanceof Element && e.target.classList.contains("DraggableHandle")) {
                    window.addEventListener("mousemove", handleMouseMove);
                    isDragging = true;
                    div.style.userSelect = "none";
                    div.style.zIndex = "3";
                }
            }
        }
    
        function onMouseUp() {
            isDragging = false;
            window.removeEventListener("mousemove", handleMouseMove);
            
            const div = draggableRef && draggableRef.current;
            if(div) {
                div.style.userSelect = "initial";
                div.style.zIndex = "0";
            }
        }

        if(div) {
            div.addEventListener("mousedown", onMouseDown);
            window.addEventListener("mouseup", onMouseUp);
        }

        return () => {
            if(div) {
                div.removeEventListener("mousedown", onMouseDown);
                window.removeEventListener("mouseup", onMouseUp);
            }

            clearInterval(animateBackInterval);
        };
    }, [draggableRef]);

    function getTranslateString() {
        const deg = Math.min(Math.abs(xVelocity), 45) * Math.sign(xVelocity);
        return `translate(${xOffset}px, ${yOffset}px) rotate(${deg}deg)`;
    }

    return (
        <div className="Draggable" style={{transform:getTranslateString()}} ref={draggableRef}>
            {props.children}
        </div>
    )
    
}

export default Draggable;