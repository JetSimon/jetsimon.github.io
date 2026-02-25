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
    },
    {
        title: "Valentine's Critter",
        img: "/critters/14-2-2026.jpg",
        date: "2/14/2026"
    },
    {
        title: "Zen Critter",
        img: "/critters/15-2-2026.jpg",
        date: "2/15/2026"
    },
    {
        title: "Family Day",
        img: "/critters/16-2-2026.jpg",
        date: "2/16/2026"
    },
    {
        title: "Mini Golf",
        img: "/critters/17-2-2026.jpg",
        date: "2/17/2026"
    },
    {
        title: "Mrs. Potato Critter",
        img: "/critters/18-2-2026.jpg",
        date: "2/18/2026"
    },
    {
        title: "Baby Critter",
        img: "/critters/19-2-2026.jpg",
        date: "2/19/2026"
    },
    {
        title: "Sick Critter",
        img: "/critters/20-2-2026.jpg",
        date: "2/20/2026"
    },
    {
        title: "A P P L E",
        img: "/critters/21-2-2026.jpg",
        date: "2/21/2026"
    },
    {
        title: "The Last of Us Critters",
        img: "/critters/22-2-2026.jpg",
        date: "2/22/2026"
    },
    {
        title: "Grumpy Cat Critter",
        img: "/critters/23-2-2026.jpg",
        date: "2/23/2026"
    },
    {
        title: "Banana Critter",
        img: "/critters/24-2-2026.jpg",
        date: "2/24/2026"
    },
    {
        title: "Smiling Critter",
        img: "/critters/25-2-2026.jpg",
        date: "2/25/2026"
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