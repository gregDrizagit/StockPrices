import React from 'react';
import Companies from '../api/companies'
import {connect} from 'react-redux'
import {addSymbols, selectSymbol, delayedQuote, peerSymbols} from '../actions'
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
            console.log(quote);
        })
        Companies.getPeersForSymbol(value).then(peers => {
            this.props.dispatch(peerSymbols(peers))
        })

    }

    selectSymbol = (e, {value}) => {
        this.setState({value: value})
    }

    render(){
        return(
            <Container>
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

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { symbols: state.symbols, selectedSymbol: state.symbol }
  }
//   connect(mapStateToProps)(
export default connect(mapStateToProps)(SearchCompany);