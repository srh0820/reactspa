import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Child(props) {
    return (
        <p className = {props.cls}>
            {props.msg} <br></br>
            {props.num} 전달 
        </p>
    )
}

export default Child
