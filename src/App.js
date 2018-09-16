import React, { Component } from 'react';
import Hero from './components/Hero';
import Paper from './components/Paper';
import CardList from './components/CardList';
import axios from 'axios';

class App extends Component {

  constructor(props){
      super(props);
      this.state = { 
        papers : [],
        msg : ''
      }

  }
  componentDidMount(){
      console.log(`Today's date is ${this.state.date}`)
      console.log("The Paper component has mounted")
      axios.get("/testing")
          .then(response => {
              //this.state.msg = response.data.msg
              this.setState({msg: response.data.msg})
              this.setState({papers: response.data.papers})
              console.log('logging papers')
              console.log(this.state.papers)
          })
          .catch(error => console.log(error))
  }
 
  render() {
    return (
      <div>
        <Hero/>
        <br/>
        <div className="container">
          <CardList papers={this.state.papers}/>
        </div>
    </div>
    );
  }
}

export default App;
