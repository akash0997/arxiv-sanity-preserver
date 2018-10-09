import React from 'react'

const LoginModal = props => {
    return(
        <div className={ props.showModal ? 'modal is-active': 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-content">
              <div className="field">
                <div className="control">
              <input className={ props.usernameValid ? "input is-primary": "input is-danger"} type="text" 
              placeholder={ props.usernameValid ? "username" : "Please type a proper username"} name="username" 
              value={props.username}
              onChange={e => props.populateInput(e)}/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className={ props.passwordValid ? "input is-primary": "input is-danger"} type="password"
               placeholder={ props.passwordValid ? "password" : "Please type a proper password"} name="password" 
               value={props.password}
               onChange={e => props.populateInput(e)}/>
            </div>
          </div>
            <a className="button is-info" onClick={e => props.submitLogin(e)}>Login/Register</a>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={props.toggleModal}></button>
          </div>
    );
}

export default LoginModal;