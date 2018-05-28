import React from 'react';
import FinancialsTableColumn from './FinancialsTableColumn';
import {connect} from 'react-redux';
import {Table, Header} from 'semantic-ui-react';

class FinancialsTable extends React.Component{
    
    state={}

    componentDidMount() {
        //Financial data is broken up into quarters.
        //we take each quarter and process them                                               
        let q1Data = this.props.data.financials[0]
        let q2Data = this.props.data.financials[1]
        let q3Data = this.props.data.financials[2]
        let q4Data = this.props.data.financials[3]

        const cols = this.parseTableData(this.props.table, q1Data); 
        
        this.setState({columns: cols})

        // })
    }

    generateRowHeaders = () => {

        const headers = Object.keys(this.state.columns).map(col => {
                return (
                    <Table.Row>
                        <Table.HeaderCell>
                            <Header as='h3'>
                                {col}
                            </Header>
                        </Table.HeaderCell>
                        <Table.Cell>
                            {
                                this.props.data.financials[0][col] ?
                                    this.props.data.financials[0][col].toLocaleString('en', {useGrouping:true})
                                :
                                null
                            }
                        </Table.Cell>
                        <Table.Cell>
                            {
                                this.props.data.financials[1][col] ?
                                    this.props.data.financials[1][col].toLocaleString('en', {useGrouping:true})
                                :
                                null
                            }
                        </Table.Cell>
                        <Table.Cell>
                            {
                                this.props.data.financials[2][col] ?
                                    this.props.data.financials[2][col].toLocaleString('en', {useGrouping:true})
                                :
                                null
                            }       
                        </Table.Cell>
                        <Table.Cell>
                            {
                                this.props.data.financials[3][col] ?
                                    this.props.data.financials[3][col].toLocaleString('en', {useGrouping:true})
                                :
                                null
                            }
                        </Table.Cell>
                    </Table.Row>
                )
            })
            
    
            return headers; 
            
    }

    parseTableData = (table, props) => {
        const columnsToRender = {}; 
        switch(table){
                case "Income Statement":
                
                    const incomeKeys = ["grossProfit", "costOfRevenue", 
                                        "operatingRevenue", "totalRevenue", 
                                        "operatingIncome", "netIncome", 
                                        "researchAndDevelopment", "operatingExpense"]; 
    
                    incomeKeys.forEach(key => {
                        columnsToRender[key] = props[key]
                    })
                    return columnsToRender; 

                    break;
                case "Balance Sheet":
                    
                    const balanceKeys = ["currentAssets", "totalAssets", "totalLiabilities", "currentCash", 
                                        "currentDebt", "totalCash", "totalDebt", "shareholderEquity" ];
    
                    balanceKeys.forEach(key => {
                        columnsToRender[key] = props[key]
                    })     
                    return columnsToRender; 

                    break;
    
                case "Cash Flow":
    
                    const cashFlowKeys = ["cashChange", "cashFlow"];
    
                    cashFlowKeys.forEach(key => {
                        columnsToRender[key] = props[key]
                    }) 
                    return columnsToRender; 

                    break;
                default:
                    
                    break
        }
        return columnsToRender
    }

    render(){
        console.log("table", this.props)
        return(
            <Table color={this.props.color} selectable celled style={{tableLayout: 'fixed'}}>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>
                            <Header as='h2'>
                                {this.props.title}
                            </Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                            <Header as='h3'>
                                <Header.Content>
                                    {this.props.data.financials[0].reportDate}
                                </Header.Content>
                            </Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                            <Header as='h3'>
                                <Header.Content>
                                    {this.props.data.financials[1].reportDate}
                                </Header.Content>
                            </Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                            <Header as='h3'>
                                <Header.Content>
                                    {this.props.data.financials[2].reportDate}
                                </Header.Content>
                            </Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                            <Header as='h3'>
                                <Header.Content>
                                    {this.props.data.financials[3].reportDate}
                                </Header.Content>
                            </Header>
                    </Table.HeaderCell>
                    </Table.Row>
                        {
                            this.state.columns  ?
                                this.generateRowHeaders()
                            :
                            null
                        }
                    
                </Table.Header>
            </Table>
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

    
export default connect(mapStateToProps)(FinancialsTable); 

