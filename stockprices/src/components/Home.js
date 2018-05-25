import React from 'react';
import SearchCompany from './SearchCompany'; 
import {connect} from 'react-redux'
import {Segment, Container,  } from 'semantic-ui-react'


class Home extends React.Component{


    unpackComapnyData = (data) => {

        Object.keys(data).forEach(item => {
            if(data[item] === ""){
                data[item] = "Unknown"; 
            }
        })
        return data 
    }
  
    render(){
        console.log(this.props)
        if(this.props.companyData)
        {
            let company = this.unpackComapnyData(this.props.companyData)
            
            return(
                <Container>
                    <SearchCompany />
                    <Segment>
                        <h1>{company.companyName} - {company.symbol}</h1>
                        <h2>CEO: {company.CEO}</h2>
                        <h4>{company.exchange} - {company.industry}</h4>
                        <h5>{company.description}</h5>
                    </Segment>
                </Container>
            )
         }else{
            
            return(
                <div>
                </div>
            )
        }
    }
        
    
}


const mapStateToProps = (state) => {
    return { symbols: state.symbols, companyData: state.symbol }
  }

export default connect(mapStateToProps)(Home); 