import React from 'react';
import Companies from '../api/companies'
import {connect} from 'react-redux'
import {addSymbols, selectSymbol} from '../actions'
import {Segment, Container } from 'semantic-ui-react'

class SearchCompany extends React.Component{

    componentDidMount(){
        Companies.getAllSymbols().then(symbols =>{ 
            this.props.dispatch(addSymbols(symbols)); 
            this.setState({symbols: symbols})
        }); 
    }

    state = {value: '', symbols: []};

    searchSymbol = () => {

        let filteredSymbols = this.state.symbols.filter(sym => {return sym.name.includes(this.state.value)})
        return filteredSymbols; 
    }

    handleChange = (e) =>{
        this.setState({value: e.target.value })
    }

    selectSymbol = (e) => {
        this.props.dispatch(selectSymbol(e.target.children[0].innerText))
    }

    render(){
        let filteredSymbols = this.searchSymbol().map(item => {return <Segment compact onClick={this.selectSymbol}><b>{item.symbol}</b> - {item.name}</Segment>});

        return(
            <Container>
                <input onChange={this.handleChange} value={this.state.value} placeholder="Search company" />
               <Segment.Group>
                   {filteredSymbols}
               </Segment.Group>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { symbols: state.symbols, selectedSymbol: state.symbol }
  }

export default connect(mapStateToProps)(SearchCompany);