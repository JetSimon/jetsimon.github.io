import { useRef, useState, PropsWithChildren, useEffect } from "react";
import "./Draggable.css";

interface DraggableProps {
    startXOffset : number;
    startYOffset : number;
}

function Draggable(props : PropsWithChildren<DraggableProps>) {
    const draggableRef = useRef<HTMLDivElement>(null);
    const [xOffset, setXOffset] = useState(0);
    const [yOffset, setYOffset] = useState(0);
    const [xVelocity, setXVelocity] = useState(0);
    useEffect(() => {

        let isDragging = false;

        setXOffset(props.startXOffset);
        setYOffset(props.startYOffset);
        setXVelocity(props.startXOffset / 10)

        const div = draggableRef && draggableRef.current;

        function animateBack() {
            if(!isDragging) {
                setXOffset(xOffset => xOffset * 0.90);
                setYOffset(yOffset => yOffset * 0.90);
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
                }
            }
        }
    
        function onMouseUp() {
            isDragging = false;
            window.removeEventListener("mousemove", handleMouseMove);
            
            const div = draggableRef && draggableRef.current;
            if(div) {
                div.style.userSelect = "initial";
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
    }, [draggableRef, props.startXOffset, props.startYOffset]);

    function getTranslateString() {
        const deg = Math.min(Math.abs(xVelocity), 45) * Math.sign(xVelocity);
        return `translate(${xOffset}px, ${yOffset}px) rotate(${deg}deg)`;
    }

    return (
        <div style={{transform:getTranslateString()}} ref={draggableRef}>
            {props.children}
        </div>
    )
    
}

export default Draggable;