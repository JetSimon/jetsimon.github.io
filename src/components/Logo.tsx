import Draggable from './Draggable';
import './Logo.css'
import ThreeText from './ThreeText';

interface LogoProps {
    content : string;
}

function Logo(props : LogoProps) {

    function getLogo() {
        let key = 0;
        return props.content.split("").map((x) => <div className='DraggableHandle' key={key++}><Draggable snapBack={true}><ThreeText>{<div className='DraggableHandle'>{x}</div>}</ThreeText></Draggable></div>)
    }

    return (
        <div className='LogoHolder'>
            {getLogo()}
        </div>
    );
}

export default Logo;