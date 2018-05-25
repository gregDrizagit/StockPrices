import React from 'react';
import Companies from '../api/companies'
import {connect} from 'react-redux'
import {addSymbols, selectSymbol} from '../actions'
import {Segment, Container, Dropdown } from 'semantic-ui-react'

class SearchCompany extends React.Component{

    componentDidMount(){
        Companies.getAllSymbols().then(symbols =>{ 
            this.props.dispatch(addSymbols(symbols)); 
            let mappedSymbols = symbols.map(item => {return {key: item.symbol, value:item.symbol, text:item.symbol+ " - " + item.name }});

            this.setState({symbols: mappedSymbols}) 
        }); 
    }

    state = {value: '', symbols: []};

   

    handleChange = (e) =>{
        this.setState({value: e.target.value })
    }

    selectSymbol = (e) => {
        // this.props.dispatch(selectSymbol())
        console.log(e.target.value)
    }

    render(){
        return(
            <Container>
                {
                    this.state.symbols.length > 0 ?

                    <Dropdown placeholder='Select Company' 
                            fluid 
                            search 
                            selection 
                            onSearchChange={this.handleChange}
                            onClick={this.selectSymbol}
                            options={this.state.symbols} 

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