import React from 'react';
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react';
import { Chart } from 'react-google-charts';
import {Button, Grid} from 'semantic-ui-react'
import {addBook} from '../actions'
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

    renderDataTable = (data) => {
        return (
            <table className="data-table">
                <caption>{data.companyName} - {data.symbol}</caption>
                <tr>
                    <th>Latest Price</th>
                    <td>${data.latestPrice}</td>
                </tr>
                <tr>
                    <th>Volume</th>
                    <td>{data.latestVolume.toLocaleString('en', {useGrouping:true})}</td>
                </tr>
                <tr>
                    <th>Avg Daily Volume</th>
                    <td>{data.avgTotalVolume.toLocaleString('en', {useGrouping:true})}</td>
                </tr>
                <tr>
                    <th>Previous Close</th>
                    <td>{data.latestVolume.toLocaleString('en', {useGrouping:true})}</td>
                </tr>
                <tr>
                    <th>52 Week Range</th>
                    <td>{data.week52Low}  - {data.week52High}</td>
                </tr>
                <tr>
                    <th>Market Cap</th>
                    <td>${data.marketCap.toLocaleString('en', {useGrouping:true})}</td>
                </tr>
                <tr>
                    <th>P/E Ratio</th>
                    <td>{data.peRatio}</td>
                </tr>
            </table>
        )
    }

    getSymbolData = () => {
        const symbol = this.props.companyData.symbol;
        Data.getChartForSymbolAtInterval(symbol, this.state.interval)
        .then(data => this.restructureChartData(data)); 

        Data.getBookForSymbol(symbol)
        .then(book => this.props.dispatch(addBook(book)))
    }

    handleIntervalButtons = (interval) => {
        this.setState({interval: interval}, this.getSymbolData())
    }

    restructureChartData = (data) =>{
        let timeAndPrice = data.map(point => [new Date(point.date), point.close]) 
        let dataObject = {
            
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
        const company = this.props.companyData
        return(
                <Grid columns={2} divided>
                    <Grid.Column width={10}>
                        {
                            this.state.data ? 
                            <div className={'chart-column'}>
                                <Chart
                                    chartType="LineChart"
                                    rows={this.state.data.rows}
                                    columns={this.state.data.columns}
                                    options={this.state.options}
                                    graph_id="LineChart"
                                    width="100%"
                                    height="500px"
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
                    <Grid.Column width={6}>
                    {
                        this.props.book ?
                            <div>
                                {this.renderDataTable(this.props.book.quote)}
                            </div>
                        :
                            <h1>Loading</h1>
                    }
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
             companyStats: state.companyStats,
             book: state.book
             }
  }

export default connect(mapStateToProps)(ChartView)