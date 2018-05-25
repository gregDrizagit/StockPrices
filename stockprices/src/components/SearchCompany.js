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

   

    handleChange = (e, {value}) =>{
        this.setState({value})
        Companies.getCompanyForSymbol(value).then(company =>{
            this.props.dispatch(selectSymbol(company)); 
        })

    }

    selectSymbol = (e,{value}) => {
        this.setState({value: value})
        // 
        
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
                            value={this.state.value}
                            onChange={this.handleChange}
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