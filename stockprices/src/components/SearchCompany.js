import React from 'react';
import Companies from '../api/companies'
import {FormControl } from 'react-bootstrap';
import {connect} from 'react-redux'
import {addSymbols} from '../actions'

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

    render(){

        let filteredSymbols = this.searchSymbol().map(item => {return item.name});
        

        return(
            <div>
                <form>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter Symbol or Company Name"
                        bsSize='large'
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </form>
                {filteredSymbols}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { symbols: state.symbols }
  }

export default connect(mapStateToProps)(SearchCompany);