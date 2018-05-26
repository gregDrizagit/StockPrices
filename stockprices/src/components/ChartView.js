import React from 'react';
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react';
import { Chart } from 'react-google-charts';
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
          }
      } 
    }

    componentDidMount(){
        Data.getChartForSymbolAtInterval("AAPL", "5y")
        .then(data => this.restructureChartData(data)); 
    }

    restructureChartData = (data) =>{
        // console.log(data)
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
        // console.log(timeAndPrice)
    }

    render(){
        return(
            <Container>
                <div>Chart about all the shit</div>
                {
                    this.state.data ? 
                    <Chart
                        chartType="LineChart"
                        rows={this.state.data.rows}
                        columns={this.state.data.columns}
                        graph_id="LineChart"
                        width="100%"
                        height="500px"
                        legend_toggle
                    />
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