import "./ThreeText.css";
import { PropsWithChildren } from "react";

function ThreeText(props : PropsWithChildren) {
    return (
        <div className="ThreeTextHolder">
            <h1 className="ThreeText InvisibleText">{props.children}</h1>
            <h1 className="ThreeText ThreeTextShadow">{props.children}</h1>
            <h1 className="ThreeText ThreeTextMain">{props.children}</h1>
        </div>
    );
}

export default ThreeText;