import React from 'react'; 
import {connect} from 'react-redux';
import {Grid, Table} from 'semantic-ui-react';
import Data from '../api/data';


class Financials extends React.Component{ 

    state = {}

    componentDidMount(){
        Data.getFinancialsForSymbol(this.props.companyData.symbol).then(data => {
            this.setState({data: data})
        })
    }

    renderFinancialsTable = () => {

    }

    render(){
        return(
            <h1>Financials</h1>
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

export default connect(mapStateToProps)(Financials)