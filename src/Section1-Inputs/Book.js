import React from 'react'
import './Book.css';

const book = (props) => {
    return (
        
        <div className = "book">
            <p>{props.title}</p>
        </div>
    )
}; 
export default book; 