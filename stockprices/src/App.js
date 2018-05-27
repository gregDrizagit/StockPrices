import React, { Component } from 'react';
import Home from './components/Home';
import ChartView from './components/ChartView';
import Financials from './components/Financials';

import { Route, Switch } from 'react-router'
import { Dropdown } from 'semantic-ui-react'
import { withRouter} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div> 
        <Switch>
          <Route exact path="/" render={(routerProps) => {return <Home {...routerProps} /> }}/>
          <Route exact path="/chart" render={(routerProps) => {return <ChartView {...routerProps} />  }}/> 
          <Route exact path="/financials" render={(routerProps) => {return <Financials />  }}/> 
          {/* <Route exact path="/market" render={(routerProps) => {return  }}/>
          <Route exact path="/facet4" render={(routerProps) => {return  }}/>  */}
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
