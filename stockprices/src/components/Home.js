import React from 'react';
import SearchCompany from './SearchCompany'; 
import Companies from '../api/companies';
import {connect} from 'react-redux';
import {Segment, Container, Header, Grid, Icon} from 'semantic-ui-react';
import {addSymbols} from '../actions';


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

    renderPeers = (peers) => {
        return peers.map(item => {return <li>{item}</li>});
    }
  
    render(){
       
            let company = this.unpackComapnyData(this.props.companyData)
            return(
                <div>
                    <div className={"company-selection"}>

                        {
                            this.props.companyData && this.props.delayedQuote && this.props.book ?

                            <div className={"company-info"}>

                                <h1>{company.companyName} ({company.symbol})</h1>
                                <h2>{this.props.delayedQuote.delayedPrice} USD</h2>
                                <h3>{this.props.book.extendedChange}</h3>
                                <h4>{company.exchange} - {company.industry}</h4>
                                <h3>CEO: {company.CEO}</h3>

                                <h5>{company.description}</h5>
                               
                            </div>
                            :
                            <div className={"company-info"}>
                                <h1>Market View</h1>
                                <h4>An app by Greg Driza </h4>
                                <h3>View the code on <a href="https://github.com/gregDrizagit/StockPrices">GitHub</a></h3>
                                <h5>Implemented with IEX Stocks API, React.Js / Redux, and Semantic-UI</h5>

                                <h2>Search for a company to view stock data.</h2>
                            </div>
                        }
                         <div className={"search-bar"}>
                                <SearchCompany />
                         </div>
                    </div>
                                    
                </div>
            )
         }

    }


const mapStateToProps = (state) => {
    return { symbols: state.symbols, 
             companyData: state.symbol, 
             delayedQuote: state.quote,
             peerSymbols: state.peerSymbols,
             book: state.book
            }
  }

export default connect(mapStateToProps)(Home); 