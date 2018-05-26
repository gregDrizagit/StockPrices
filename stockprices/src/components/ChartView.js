import React from 'react';
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react';
import { Chart } from 'react-google-charts';
import {Button, Grid} from 'semantic-ui-react'

import Data from '../api/data';


class ChartView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          options: {
            title: 'Apple Prices',
            hAxis: { title: 'Time' },
            vAxis: { title: 'Price' },
            legend: 'none',
            colors:['green']
          },
          interval: '2y'
      } 
    }

    componentDidMount(){
        this.getSymbolData(); 
    }

    getSymbolData = () =>{
        Data.getChartForSymbolAtInterval("AAPL", this.state.interval)
        .then(data => this.restructureChartData(data)); 
    }

    handleIntervalButtons = (interval) => {
        this.setState({interval: interval}, this.getSymbolData())
    }

    restructureChartData = (data) =>{
        let timeAndPrice = data.map(point => [new Date(point.date), point.close]) 
        let dataObject ={
            
                "chartType": "LineChart",
                "columns": [
                  {
                    "label": "Time",
                    "type": "date"
                  },
                  {
                    "label": "Price",
                    "type": "number"
                  }
                ],
                "rows": [
                    ...timeAndPrice
                ],
                "width": "100%"
              }
        
        this.setState({data: dataObject});
    }

    render(){
        return(
                <Grid columns={2} divided>
                    <Grid.Column width={10}>
                        {
                            this.state.data ? 
                            <div>
                                <Chart
                                    chartType="LineChart"
                                    rows={this.state.data.rows}
                                    columns={this.state.data.columns}
                                    options={this.state.options}
                                    graph_id="LineChart"
                                    width="100%"
                                    height="600px"
                                    legend_toggle
                                />
                                <div style={{textAlign: "center"}}>
                                <Button.Group basic >
                                    <Button onClick={() => this.handleIntervalButtons('ytd')} content="YTD" />
                                    <Button onClick={() => this.handleIntervalButtons('1m')} content="1M" />
                                    <Button onClick={() => this.handleIntervalButtons('3m')} content="3M" />
                                    <Button onClick={() => this.handleIntervalButtons('6m')} content="6M" />
                                    <Button onClick={() => this.handleIntervalButtons('1y')} content="1Y" />
                                    <Button onClick={() => this.handleIntervalButtons('2y')} content="2Y" />
                                    <Button onClick={() => this.handleIntervalButtons('5y')} content="5Y" />
                                </Button.Group>
                                </div>
                            </div>
                            :
                            <h1>Loading</h1>

                        }
                    </Grid.Column>
                    <Grid.Column style={{backgroundColor:'#ebebe0'}} width={6}>
                        <div>
                            <h1>data</h1>
                        </div>
                    </Grid.Column>
                </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return { symbols: state.symbols, 
             companyData: state.symbol, 
             delayedQuote: state.quote,
             peerSymbols: state.peerSymbols,
             companyStats: state.companyStats
             }
  }

export default connect(mapStateToProps)(ChartView)