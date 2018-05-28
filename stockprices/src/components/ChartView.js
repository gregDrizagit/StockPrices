import React from 'react';
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react';
import { Chart } from 'react-google-charts';
import {Button, Grid, Label, Table, Icon, Segment} from 'semantic-ui-react'
import {addBook} from '../actions'
import Data from '../api/data';


class ChartView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          options: {
            hAxis: {  },
            vAxis: {  },
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
            <div className={"data-table"}>
            <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Latest Price</Table.Cell>
                <Table.Cell>${data.latestPrice}</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Volume</Table.Cell>
                <Table.Cell>{data.latestVolume.toLocaleString('en', {useGrouping:true})}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Avg Daily Volume</Table.Cell>
                <Table.Cell>{data.avgTotalVolume.toLocaleString('en', {useGrouping:true})}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Previous Close</Table.Cell>
                <Table.Cell>{data.previousClose}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>52 Week Range</Table.Cell>
                <Table.Cell>{data.week52Low}  - {data.week52High}</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>Market Cap</Table.Cell>
                <Table.Cell>${data.marketCap.toLocaleString('en', {useGrouping:true})}</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>P/E Ratio</Table.Cell>
                <Table.Cell>{data.peRatio}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          </div>
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
            <div className='chart-view-body'>
                <Grid columns={2} divided>
                    <Grid.Column stretched width={10}>
                    <div className="chart-view-header">
                        <h2>{this.props.companyData.companyName} Stock Prices - {this.state.interval}</h2>
                    </div>
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
                                    height='85vh'
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
                    <Grid.Column className={'data-column'} width={6}>
                        

                    {
                        this.props.book ?
                        <div>
                            this.renderDataTable(this.props.book.quote)
                            <Button className={'financials-button'} 
                                color="yellow" 
                                content="View Financial Tables" 
                                onClick={() => this.props.history.push('/financials')} />
                        </div>
                        :
                            <h1>Loading</h1>
                    }
                    </Grid.Column>
                </Grid>
            </div>
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