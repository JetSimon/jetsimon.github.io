import { useState } from "react";
import "./AppleCritter.css";

interface CritterProps {
    date: string;
    title: string;
    img: string;
}

function Critter(props: CritterProps) {
    return (
        <div className="Critter">
            <h4>{props.title}</h4>
            <img src={props.img}></img>
            <p>{props.date}</p>
        </div>
    );
}

const critters: Array<CritterProps> = [
    {
        title: "Dr Critter",
        img: "/critters/12-2-2026.jpg",
        date: "2/12/2026"
    },
    {
        title: "Smile Critter",
        img: "/critters/13-2-2026.jpg",
        date: "2/13/2026"
    }
];

function AppleCritter() {

    const [critterIndex, setCritterIndex] = useState(critters.length - 1);

    const critter = critters[critterIndex];

    return (
        <div className="AppleCritter">
            <Critter title={critter.title} date={critter.date} img={critter.img}></Critter>
            <div>
                <div className="CritterButtons">
                    <button disabled={critterIndex <= 0} onClick={() => { if (critterIndex > 0) setCritterIndex(critterIndex - 1); }}>Prev</button>
                    <button disabled={critterIndex >= critters.length - 1} onClick={() => { if (critterIndex < critters.length - 1) setCritterIndex(critterIndex + 1); }}>Next</button>
                </div>
                <div className="CritterSelect">
                    <label>Select Date</label>
                    <select value={critterIndex} onChange={(e) => setCritterIndex(Number.parseInt(e.target.value))}>
                        {critters.map((e, i) => <option key={i} value={i}>{e.date} - {e.title}</option>)}
                    </select>
                </div>
            </div>

        </div>
    );
}

export default AppleCritter;