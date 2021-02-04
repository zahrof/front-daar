import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Section1 from './Section1-Inputs/Section1';
import Book from './Section1-Inputs/Book';
import Searcher from './Searcher/Searcher'

class App extends Component {
  state = {
    results: [], 
    suggestions: [],
    method:"testKeyword?keyword",
    keyWord:""
  }

  searchHandler = () => {
    // TO HELP DEBUGGING : 
    console.log("method : "+this.state.method + " string "+ this.state.keyWord);
    axios.get('http://localhost:8080/'+this.state.method+ '=toto')
    .then(serverResponses => {
      this.setState({results: serverResponses.data[0], suggestions: serverResponses.data[1]});
      console.log(this.state)
    });
    
  }

  handleMethodChange = (e) =>{ this.setState({method: e.target.value }); }

  handleKeywordChange = (e) =>{ this.setState({keyWord: e.target.value }); }

  render() {
      const  renderResults = this.state.results.map(result => {
          return <Book key={result.isbn} title={result.title}/>
      }); 

      const  renderSuggestions = this.state.suggestions.map(result => {
        return <Book key={result.isbn} title={result.title}/>
      }); 
      return (
        <div className="App">
            <h1> Boogle</h1>

            <Searcher searchHandler={this.searchHandler}
                       method={this.state.method}
                       handleMethodChange={this.handleMethodChange}
                       handleKeywordChange={this.handleKeywordChange}   />
          
            <Section1 title={"Results"} results={renderResults}/>
            <Section1 title={"Suggestions"} results={renderSuggestions}/>
        </div>
      );
  }
}

export default App;
