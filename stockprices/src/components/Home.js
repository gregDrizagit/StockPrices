import React from 'react';
import SearchCompany from './SearchCompany'; 
import { Jumbotron } from 'react-bootstrap';
import {connect} from 'react-redux'


class Home extends React.Component{

    
  
    render(){
        return(
            <Jumbotron>
                <SearchCompany />
            </Jumbotron>
        )
    }
}


const mapStateToProps = (state) => {
    return { symbols: state.symbols }
  }


export default connect(mapStateToProps)(Home); 