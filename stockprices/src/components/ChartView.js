import React from 'react';
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react';
import { Chart } from 'react-google-charts';
import {Button} from 'semantic-ui-react'

import Data from '../api/data';


class ChartView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          options: {
            title: 'Age vs. Weight comparison',
            hAxis: { title: 'Time' },
            vAxis: { title: 'Price' },
            legend: 'none',
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
        this.setState({interval: interval})
        this.getSymbolData()
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
                "options": {
                  "legend": true,
                  "hAxis": {
                    "title": "Time"
                  },
                  "vAxis": {
                    "title": "Price"
                  }
                },
                "width": "100%"
              }
        
        this.setState({data: dataObject});
    }

    render(){
        return(
            <Container>
                <div>Chart about all the shit</div>
                {
                    this.state.data ? 
                    <div>
                    <Chart
                        chartType="LineChart"
                        rows={this.state.data.rows}
                        columns={this.state.data.columns}
                        graph_id="LineChart"
                        width="100%"
                        height="500px"
                        legend_toggle
                    />
                    <Button.Group >
                        <Button onClick={() => this.handleIntervalButtons('1d')} content="1D" />
                        <Button onClick={() => this.handleIntervalButtons('1m')} content="1M" />
                        <Button onClick={() => this.handleIntervalButtons('3m')} content="3M" />
                        <Button onClick={() => this.handleIntervalButtons('1Y')} content="1Y" />
                        <Button onClick={() => this.handleIntervalButtons('2Y')} content="2Y" />
                        <Button onClick={() => this.handleIntervalButtons('5Y')} content="5Y" />
                    </Button.Group>
                    </div>
                    :
                    <h1>Loading</h1>

                }
            </Container>
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