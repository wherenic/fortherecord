import render from "dom-serializer"
import React, {Component, useState} from "react"
import { isConstructorDeclaration } from "typescript"
import storyData from "../data/storyData"

function Switch() {
    const [count, setCount] = useState(0)

    function increment(){
        setCount(prevCount => prevCount + 1)
    }

    function decrement(){
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    )

}

// class Switch extends React.Component{
//     constructor(){
//         super()
//         this.state ={
//             count: storyData
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(id){
//         this.setState(prevState => {
//             const updatedId = prevState.
//             return{
//                 count: prevState.count + 1
//             }
//         })

//     }

//     render(){
//         return (
//             <div>
//                 <h1> {this.state.count} </h1>
//                 <button onClick={this.handleClick}>change</button>
//             </div>
//         )
//     }

// }

export default Switch