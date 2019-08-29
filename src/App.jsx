import React,{ Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Editor from './Editor/Editor';
import Site from './Site.jsx';
import { UserSession, AppConfig } from 'blockstack';
import { withRouter } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    var blockstackConfig = new AppConfig(['store_write', 'publish_data']);
    this.userSession = new UserSession({ blockstackConfig });
  }
  
  componentWillMount() {
    const session = this.userSession
    if(!session.isUserSignedIn() && session.isSignInPending()) {
      session.handlePendingSignIn().then((userData) => {
        if(!userData.username) {
          throw new Error('This app requires a username.')
        }
        if(window.location.search.indexOf("save=true") > -1){
          this.props.history.push('/editor/save');
        }
        if(window.location.search.indexOf("open=true") > -1){
          this.props.history.push('/editor/open');
        }
      });
    }
  }

  render() {
    return (
      <div className="site-wrapper">
          {
            <Switch>
              <Route path='/editor/:action?'
                render={
                  routeProps => <Editor {...routeProps} userSession={this.userSession} />
                }
              />
              <Route path='/' render={routeProps => <Site  {...routeProps} />}/>              
            </Switch>
          }
      </div>
    );
  }
}
export default withRouter(App)
