import PortfolioItemData from "../data_types/PortfolioitemData"
import "./PortfolioButton.css"
import Draggable from "./Draggable";
import { useEffect, useRef, useState} from "react";
interface PortfolioButtonProps {
    item : PortfolioItemData,
    setSelectedItemTitle : (title : string) => void,
    selected : boolean
}

function PortfolioButton(props : PortfolioButtonProps) {
    const {item, setSelectedItemTitle, selected} = props;
    
    const [invisible, setInvisible] = useState(true);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let startX = 0;
        let startY = 0;
        const div = ref && ref.current;

        function handleMouseDown(e : MouseEvent) {
            startX = e.clientX;
            startY = e.clientY;
        }

        function handleMouseUp(e : MouseEvent) {
            
            const endX = e.clientX;
            const endY = e.clientY;

            const diff = Math.sqrt((endX - startX)**2 + (endY - startY)**2);

            if(diff <= 25) {
                setSelectedItemTitle(item.title);
            }
        }

        if(div) {
            div.addEventListener("mousedown", handleMouseDown);
            div.addEventListener("mouseup", handleMouseUp);
        }

        const visibleTimer = setTimeout(() => {
            setInvisible(false);
        }, 0);

        return (() => {
            if(div) {
                div.removeEventListener("mousedown", handleMouseDown);
                div.removeEventListener("mouseup", handleMouseUp);
            }

            clearTimeout(visibleTimer)
        });
    });

    function getBackground() {
        return `url("${item.image}")`
    }

    return (
        <Draggable snapBack={false}>
            <div style={{backgroundImage:getBackground(), visibility : selected || invisible ? "hidden" : "visible"}} className="PortfolioButton DraggableHandle" ref={ref}>
                <p className="PortfolioButtonText DraggableHandle">
                    {item.title}
                </p>
            </div>
        </Draggable>
    )
}

export default PortfolioButton;