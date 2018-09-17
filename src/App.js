import React, { Component } from 'react';
import './index.css'
import Hero from './components/Hero';
import Paper from './components/Paper';
import PaperList from './components/PaperList';
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
      console.log('printing papers from cDM')
      this.fetchData()
  }

  fetchData(){
      console.log('Fetching data ...')
      axios.get("/testing")
          .then(response => {
              //this.state.msg = response.data.msg
              this.setState({msg: response.data.msg})
              this.setState({papers: response.data.papers})
          })
          .catch(error => console.log(error))
      console.log('Data fetched!!')
  }
 
  render() {
    return (
      <div>
        <Hero/>
        <br/>
        <div className="container">
          <PaperList papers={this.state.papers}/>
        </div>
      </div>
    );
  }
}

export default App;
