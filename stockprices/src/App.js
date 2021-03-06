import React, { Component } from 'react';
import HomeView from './components/HomeView';
import ChartView from './components/ChartView';
import Nav from './components/Nav';
import FinancialsView from './components/FinancialsView';
import { Route, Switch } from 'react-router'
import { Dropdown } from 'semantic-ui-react'
import { withRouter} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div> 
        <Switch>
          <Route exact path="/" render={(routerProps) => {return <HomeView {...routerProps} /> }}/>
          <Route exact path="/chart" render={(routerProps) => {return <ChartView {...routerProps} />  }}/> 
          <Route exact path="/financials" render={(routerProps) => {return <FinancialsView {...routerProps} />  }}/> 
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
