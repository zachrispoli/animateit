import React, { Component } from 'react';
import WickModal from 'Editor/Modals/WickModal/WickModal'; 
import ActionButton from 'Editor/Util/ActionButton/ActionButton'; 

import './_signIn.scss';

class SignIn extends Component {

  componentDidMount() {
    if (this.props.userSession && (this.props.userSession.isUserSignedIn() || this.props.userSession.isSignInPending())) {
      this.props.toggle();
    }
  }

  render() {
    return (
      <WickModal
        open={this.props.open}
        toggle={this.props.toggle}
        className="signin-modal-body"
        overlayClassName="signin-modal-overlay">
          
        <div className="row">
          <div className="col-6">
            <div className="signin-left-container">
              <img className="signin-img" src="/resources/logo.png" alt="ANIMATE IT"/>
              <p className="signin-text">Log in to get started.</p>
              <ActionButton 
                className="signin-modal-button"
                color='green'
                action={() => { this.props.onCloseSignIn(true);
                  this.props.toggle(); }}
                text="Continue with Blockstack"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="signin-right-container signin-text">
              <h5>What is Blockstack?</h5>
              <p>ANIMATE IT is built on top of <a target="_blank" rel="noopener noreferrer" href="https://blockstack.org/try-blockstack">Blockstack</a>.</p>
              <p>It lets you create a decentralized identity and completely own all your data. You decide where your data is stored and who can access it.</p>
            </div>
          </div>
        </div>

      </WickModal>
    );
  }
}
export default SignIn;
