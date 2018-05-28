import React from 'react';
import Companies from '../api/companies'
import Data from '../api/data'

import {connect} from 'react-redux'
import {addSymbols, addBook, addStats, selectSymbol, delayedQuote, peerSymbols} from '../actions'
import {Segment, Container, Dropdown } from 'semantic-ui-react'

class SearchCompany extends React.Component{

   
    state = {value: '', symbols: []};


    handleSelectionChange = (e, {value}) => { 

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
        
        localStorage.setItem("lastSymbol", value); 

    }



    handleSearchChange = (e) => {
        this.setState({value: e.target.value})

        let filteredSymbols = this.props.symbols.filter(sym => sym.text.includes(e.target.value));

        if(e.target.value.length <= 2) {
            this.setState({symbols: filteredSymbols.slice(0, 300)})
        }else{
            this.setState({symbols: filteredSymbols}) 

        }
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
                            minCharacters={2}
                            value={this.state.value}
                            onSearchChange={this.handleSearchChange}
                            onChange={this.handleSelectionChange}
                            options={this.state.symbols} 

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
export default connect(mapStateToProps)(SearchCompany);