import React from 'react';
import SearchCompany from './SearchCompany'; 
import {connect} from 'react-redux'


class Home extends React.Component{


  
    render(){
        return(
            <div>
                <SearchCompany />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { symbols: state.symbols, selectedSymbol: state.symbol }
  }

//   connect(mapStateToProps)(
export default Home; 