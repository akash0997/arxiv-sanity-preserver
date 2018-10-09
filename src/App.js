import React, { Component } from 'react';
import Hero from './components/Hero';
import VideoLink from './components/VideoLink';
import LoginModal from './components/LoginModal'
import Paper from './components/Paper';
import PaperList from './components/PaperList';
import axios from 'axios';
import ForkMeOnGithub from './components/ForkMeOnGithub';
class App extends Component {

  constructor(props){
      super(props);
      this.state = { 
        papers : [],
        msg : '',
        hide_notification: false,
        show_modal: false,
        username: '',
        password: '',
        usernameValid: true,
        passwordValid: true,
        usernameErrorMessage: '',
        passwordErrorMessage: '',
        isLoggedIn: false,
        incorrectLogin: false
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

  hideNotification = id => {
    console.log('you clicked hide notification')
    this.setState({
      hide_notification: true
    })
  }

  toggleModal = id => {
    // this.setState(prevState => ({
    //   passwordValid: true,
    //   usernameValid: true,
    //   username: '',
    //   password: '',
    //   show_modal : !prevState.show_modal,
    // }))
    this.setState({
      passwordValid: true,
      usernameValid: true,
      username: '',
      password: '',
      show_modal : false,
    })

  }

  populateInput = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitLogin = e => {
    if(this.state.username === ''){
      this.setState({
        usernameValid: false
      })
    }

    if(this.state.password === ''){
      this.setState({
        passwordValid: false
      })
    }


    if(this.state.usernameValid && this.state.passwordValid){
      axios.post('/loginFromApi', { params: {
        username: this.state.username,
        password: this.state.password
      }})
      .then(response => {
        if(response.data.success == 'success'){
          this.setState({
              isLoggedIn: true,
              show_modal: false,
              incorrectLogin: false
          })
        }else if(response.data.success == 'failure'){
          this.setState({
            incorrectLogin: true,
            isLoggedIn: false,
            show_modal: false
          })
        }


      })
    }
  }

  showLoginModal = input =>  {
    if(this.state.isLoggedIn){
      this.setState({
        isLoggedIn: false,
        incorrectLogin: false
      })
    }else if(this.state.incorrectLogin != ''){ //persist the username if password is wrong
      this.setState({
        password: '',
        isLoggedIn: false,
        show_modal: true
      })
    }
    else{
      this.setState(
        {
          username: '',
          password: '',
          isLoggedIn: false,
          show_modal: true
        }
      )

    }
  }
 
  render() {
    return (
      <div>
          <LoginModal 
            showModal={this.state.show_modal} 
            toggleModal={this.toggleModal}
            populateInput={this.populateInput}
            submitLogin={this.submitLogin}
            usernameValid={this.state.usernameValid}
            passwordValid={this.state.passwordValid}
            username={this.state.username}
            password={this.state.password}
            />
        <Hero
          showLoginModal={this.showLoginModal}
          username={this.state.username}
          isLoggedIn={this.state.isLoggedIn}
          incorrectLogin={this.state.incorrectLogin}
        />
        <br/>
        {!this.state.hide_notification && <VideoLink hideNotification={this.hideNotification} />}
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
