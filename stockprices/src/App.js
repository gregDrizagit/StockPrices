import React, { Component } from 'react';
import Home from './components/Home'; 
import { Route, Switch } from 'react-router'

import { withRouter} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div> 
        <Switch>
          <Route exact path="/home" render={(routerProps) => {return <Home {...routerProps} /> }}/>
          <Route exact path="/facet1" render={(routerProps) => {return  }}/>
          <Route exact path="/facet2" render={(routerProps) => {return  }}/>
          <Route exact path="/facet3" render={(routerProps) => {return  }}/>
          <Route exact path="/facet4" render={(routerProps) => {return  }}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
