import React, {useState} from "react"
import Card from "./Card";
const RandomDecisionRender = ({array}) => {

    const [randomDecision, setRandomDecision] = useState(null)
        const getRandomDecision = () => {
            const randomIndex = Math.floor(Math.random() * array.length);
            setRandomDecision(array[randomIndex]);
        }

    return (
        <div>
            <div className="card-container">
                <Card description={randomDecision && <p> {randomDecision} </p>} onClick={getRandomDecision}/>
            </div>
        </div>
    )
}

export default RandomDecisionRender;