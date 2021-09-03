import React from "react"

function Story(props){
    return (
        <div>
            <h3>Story: {props.description}</h3>
            <h3>Horoscope: {props.horoscope}</h3>
            <h3>Age: {props.age}</h3>
        </div>
    )
}

export default Story