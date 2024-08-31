import { PropsWithChildren } from 'react'
import Draggable from './Draggable';
import './Box.css'

function Box(props : PropsWithChildren) {
    return (
        <Draggable snapBack={true}>
            <div className="DraggableHandle Box">
            {props.children}   
            </div>
        </Draggable>
    )
}

export default Box;