import React from 'react'
import {Icon, Segment, Header} from 'semantic-ui-react'
import Data from '../api/data';

class Nav extends React.Component{

    state = {}; 

    componentDidMount(){
        Data.getMarketOverview().then(data => this.setState({data: data}))
    }

    renderChange = (data) => {
        console.log(data)
        let change = ''; 
        let lastRecord = data.chart.length - 1; 
        switch(Math.sign(data.chart[lastRecord].change)){
            case 1:
                return <h4 style={{color:'green'}}>+{data.chart[lastRecord].change} ({data.chart[lastRecord].changePercent}%) </h4>
                break;
            case -1: 
                return <h4 style={{color:'red'}}>-{data.chart[lastRecord].change} ({data.chart[lastRecord].changePercent}%) </h4>
                break;
            default:
                console.log("default")
        }

    }

    render(){
        if(this.state.data){

                return(
                <div className={'market-overview-element'}>
                    <Header as='h4' textAlign='center' floated="right">
                        S&P 500: {this.renderChange(this.state.data.SPY)}
                    </Header>
                    <Header as='h4' textAlign='center' floated="right">
                        NASDAQ: {this.renderChange(this.state.data.ONEQ)}
                    </Header>
                    <Header as='h4' textAlign='center' floated="right">
                    Dow Jones: {this.renderChange(this.state.data.DIA)}
                    </Header>
                </div>
                    
            )
        }else{
            return(null)
        }
    }

}

export default Nav