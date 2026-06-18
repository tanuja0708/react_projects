import React from "react";
import Background from "./Components/Background/Background";

const Evpage = () => {
    let heroData = [
        {text1: "Dive into", text2: "what you love"},
        {tesx1: "Indulge", text2: "your passions"},
        {tesx1: "Give in to", text2: "your passions"},
    ]
    const [heroCount,setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(true);
    return (
        <div>
            <Background playStatus = {playStatus} heroCount = {heroCount}/>
            <Navbar/>
        </div>
    )
}

export default Evpage;