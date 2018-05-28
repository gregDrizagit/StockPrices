import React from 'react'; 
import {connect} from 'react-redux';
import {Grid, Table, Container, Header} from 'semantic-ui-react';
import Data from '../api/data';
import FinancialsTable from './FinancialsTable';

class FinancialsView extends React.Component{ 

    state = {}

    componentDidMount(){
        Data.getFinancialsForSymbol(this.props.companyData.symbol).then(data => {
            this.setState({data: data})
        })
    }

    renderFinancialsTable = () =>{

        return(
            <Container>
                <FinancialsTable table={"Income Statement"} data={this.state.data}/>
                <FinancialsTable table={"Balance Sheet"} data={this.state.data}/>
                <FinancialsTable table={"Cash Flow"} data={this.state.data}/>
            </Container>  
        )
    }
            
    


    render(){
        return(
            <div>
                <h1>Financials</h1>
                {
                    this.state.data ?
                        this.renderFinancialsTable()
                    :
                        null
                }
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

export default connect(mapStateToProps)(FinancialsView)




// renderFinancialsTable = () => {
//     let incomeStatementObjects = {};
//     let balanceSheetObjects = {};
//     let cashFlowObjects = {};


//     this.state.data.financials.map(date => {
//         //we need to go ever each date
//         let incomeStatementKeys = Object.keys(date).slice(0, 9);
//          incomeStatementObjects[date.reportDate] = {};
//         incomeStatementKeys.forEach(key => {
//             let icStatementParam = {};
//             icStatementParam[key] = date[key];
//             Object.assign(incomeStatementObjects[date.reportDate], icStatementParam)
//         });

//         let balanceSheetKeys = Object.keys(date).slice(9, 17);
//          balanceSheetObjects[date.reportDate] = {};

//          balanceSheetKeys.forEach(key => {
//             let balanceSheetParam = {};
//             balanceSheetParam[key] = date[key];
//             Object.assign(balanceSheetObjects[date.reportDate], balanceSheetParam)
//         });


//         let cashFlowKeys = Object.keys(date).slice(17, 20);
//         cashFlowObjects[date.reportDate] = {}; 
//         cashFlowKeys.forEach(key => {
//             let cashFlowParam = {};
//             cashFlowParam[key] = date[key];
//             Object.assign(cashFlowObjects[date.reportDate], cashFlowParam)
//         });

//     })