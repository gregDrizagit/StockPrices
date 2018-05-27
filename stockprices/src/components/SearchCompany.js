import React from 'react';
import Companies from '../api/companies'
import Data from '../api/data'

import {connect} from 'react-redux'
import {addSymbols, addBook, addStats, selectSymbol, delayedQuote, peerSymbols} from '../actions'
import {Segment, Container, Dropdown } from 'semantic-ui-react'

class SearchCompany extends React.Component{

   
    state = {value: '', symbols: []};


    handleChange = (e, {value}) => { 

        this.setState({value})
        
        Companies.getCompanyForSymbol(value).then(company => {
            this.props.dispatch(selectSymbol(company))
        })

        Companies.getDelayedQuoteForSymbol(value).then(quote => {
            this.props.dispatch(delayedQuote(quote))
        })

        Companies.getPeersForSymbol(value).then(peers => {
            this.props.dispatch(peerSymbols(peers))
        })

        Data.getBookForSymbol(value)
        .then(book => this.props.dispatch(addBook(book))) 

    }

    selectSymbol = (e, {value}) => {
        this.setState({value: value})
    }

    render(){
        return(
            <div className={"search-bar"}>
                {
                    this.props.symbols.length > 0 ?

                    <Dropdown placeholder='Select Company' 
                            fluid 
                            search 
                            selection
                            value={this.state.value}
                            onChange={this.handleChange}
                            options={this.props.symbols} 

                            />
                    :
                    null
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { symbols: state.symbols, selectedSymbol: state.symbol }
  }
//   connect(mapStateToProps)(
export default connect(mapStateToProps)(SearchCompany);