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
          },
          data: [
            ['Age', 'Weight'],
            [8, 12],
            [4, 5.5],
            [11, 14],
            [4, 5],
            [3, 3.5],
            [6.5, 7],
          ],
        };
      } 

    componentDidMount(){
        Data.getChartForSymbolAtInterval("AAPL", "5y").then(console.log)
    }

    render(){
        return(
            <Container>
                <div>Chart about all the shit</div>
                <Chart
                    chartType="LineChart"
                    data={this.state.data}
                    options={this.state.options}
                    graph_id="LineChart"
                    width="100%"
                    height="500px"
                    legend_toggle
                />
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