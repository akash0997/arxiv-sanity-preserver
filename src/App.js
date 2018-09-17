import React, { Component } from 'react';
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

  getSimilar = pid => {
   
    axios.get(`/api/${pid}`)
          .then(response => {
              //this.state.msg = response.data.msg
              this.setState({msg: response.data.msg})
              this.setState({papers: response.data.papers})
          })
          .catch(error => console.log(error))
      console.log('Similar papers fetched!!')
    
  }

  byAuthor = authorName => {
      const search_url=`/api/search?q=${authorName.replace(/ /g, '+')}`
      axios.get(search_url)
            .then(response => {
              this.setState({msg: response.data.msg})
              this.setState({papers: response.data.papers})
            })
            .catch(error => console.log(error))
        console.log('By authors fetched!!')

  }
 
  render() {
    return (
      <div>
        <Hero/>
        <br/>
        <div className="container">
          <div className="columns">
            <div className="column is-three-fourths">
              <PaperList 
              papers={this.state.papers}
                handleGetSimilar={this.getSimilar}
                byAuthor={this.byAuthor}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
