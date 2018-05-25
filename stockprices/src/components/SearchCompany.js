import React from 'react';
import Companies from '../api/companies'
import {connect} from 'react-redux'
import {addSymbols} from '../actions'
import {Segment, Input } from 'semantic-ui-react'

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
        console.log(e.target)
    }

    render(){
        let filteredSymbols = this.searchSymbol().map(item => {return <li>{item.name}</li>});

    
        return(
            <Segment>
               
                    
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return { symbols: state.symbols }
  }

export default connect(mapStateToProps)(SearchCompany);