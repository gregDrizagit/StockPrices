import React from 'react';
import Companies from '../api/companies'
import {FormControl } from 'react-bootstrap';
import {connect} from 'react-redux'
import {addSymbols} from '../actions'

class SearchCompany extends React.Component{

    componentDidMount(){
        Companies.getAllSymbols().then(console.log); 
    }

    state = {value: ''};

    handleChange = (e) =>{
        this.setState({value: e.target.value })
    }

    render(){
        console.log(this.state.value)
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
            </div>
        )
    }
}


export default connect()(SearchCompany);