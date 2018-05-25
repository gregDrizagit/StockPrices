import React from 'react';
import SearchCompany from './SearchCompany'; 
import {connect} from 'react-redux'


class Home extends React.Component{


  
    render(){
        return(
            <SearchCompany />
        )
    }
}


const mapStateToProps = (state) => {
    return { symbols: state.symbols }
  }


export default connect(mapStateToProps)(Home); 