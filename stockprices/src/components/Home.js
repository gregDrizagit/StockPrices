import React from 'react';
import SearchCompany from './SearchCompany'; 
import Companies from '../api/companies'
import {connect} from 'react-redux'
import {Segment, Container, Header} from 'semantic-ui-react'
import {addSymbols} from '../actions'


class Home extends React.Component{


    componentDidMount(){
        Companies.getAllSymbols().then(symbols =>{ 
            let mappedSymbols = symbols.map(item => {return {key: item.symbol, value:item.symbol, text:item.symbol+ " - " + item.name }});
            this.props.dispatch(addSymbols(mappedSymbols)); 

            this.setState({symbols: mappedSymbols}) 
        });    
    }

    unpackComapnyData = (data) => {

        Object.keys(data).forEach(item => {
            if(data[item] === ""){
                data[item] = "Unknown"; 
            }
        })
        return data 
    }
  
    render(){
       
            let company = this.unpackComapnyData(this.props.companyData)

            return(
                <Container>
                    <Header>
                        <SearchCompany />
                    </Header>
                    <Segment>
                        {
                            this.props.companyData && this.props.delayedQuote ?
                            <div>
                            <h1>{company.companyName} - {company.symbol}</h1>
                            <h3>CEO: {company.CEO}</h3>
                            <h2>{this.props.delayedQuote.delayedPrice} USD</h2>
                            <h4>{company.exchange} - {company.industry}</h4>
                            <h5>{company.description}</h5>
                            </div>
                            :
                            <h1>Select a company to view stock performance</h1>
                        }
                    </Segment>
                </Container>
            )
         }

    }


const mapStateToProps = (state) => {
    return { symbols: state.symbols, companyData: state.symbol, delayedQuote: state.quote }
  }

export default connect(mapStateToProps)(Home); 