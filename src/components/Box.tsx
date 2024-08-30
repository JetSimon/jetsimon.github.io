import { PropsWithChildren } from 'react'
import Draggable from './Draggable';
import './Box.css'

function Box(props : PropsWithChildren) {
    return (
        <Draggable startXOffset={(Math.random() - 0.5) * 250} startYOffset={(Math.random() - 0.5) * 250}>
            <div className="DraggableHandle Box">
            {props.children}   
            </div>
        </Draggable>
    )
}

export default Box;