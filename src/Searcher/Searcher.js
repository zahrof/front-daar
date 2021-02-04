import React from 'react'
import './Searcher.css';

const searcher = (props) => {
    return (
        <div className = "searcher">
            <div className = "searcher-element">
                <input type="text" placeholder="Some keyword or RegEx..." onChange= {props.handleKeywordChange}/>
            </div>

            <div className = "searcher-element">
                <select value ={props.method} onChange={props.handleMethodChange}>
                        <option value="testKeyword?keyword">By keyword</option>
                        <option value="testRegEx?regEx">By regEx</option>
                </select>
            </div>   
            
            <div className = "searcher-element">
            <button onClick={props.searchHandler}>Search</button>
            </div>
        </div>
    )
}; 
export default searcher; 