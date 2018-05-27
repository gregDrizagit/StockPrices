import React from 'react';
import SearchCompany from './SearchCompany'; 
import NewsCard from './NewsCard'
import Companies from '../api/companies';
import {connect} from 'react-redux';
import {Segment, Container, Header, Grid, Card, Icon} from 'semantic-ui-react';
import {addSymbols} from '../actions';


class Home extends React.Component{

    state = {};

    componentDidMount(){
        Companies.getAllSymbols().then(symbols =>{ 
            let mappedSymbols = symbols.map(item => {return {key: item.symbol, value:item.symbol, text:item.symbol+ " - " + item.name }});
            this.props.dispatch(addSymbols(mappedSymbols)); 
        });

        Companies.getMarketNews().then(news => this.setState({news: news})); 
    }
    
    renderChange = (data) => {
        console.log(data.extendedChange)
        let change = ''; 
        switch(Math.sign(data.extendedChange)){
            case 1:
            console.log("green", data.extendedChange)
                break;
            case -1: 
            console.log("red", data.extendedChange)
                break;
            default:
                console.log("default")
        }

    }

    unpackComapnyData = (data) => {

        Object.keys(data).forEach(item => {
            if(data[item] === ""){
                data[item] = "Unknown"; 
            }
        })
        return data 
    }

    renderNewsCards = () => {

        return this.state.news.map(article => <NewsCard article={article} />)
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
                                <h2>{this.props.delayedQuote.delayedPrice} USD {this.renderChange(this.props.book)}</h2>
                                <h4>{company.exchange} - {company.industry}</h4>
                                <h3>CEO: {company.CEO}</h3>
                            
                                <h5>{company.description}</h5>

                                <h2>See More Data: </h2><Icon name={"chevron right"} onClick={() => this.props.history.push('/chart')} />
                               
                            </div>
                            :
                            <div className={"company-info"}>
                                <h1>Market View</h1>
                                <h4>An app by Greg Driza </h4>
                                <h3>View the code on <a href="https://github.com/gregDrizagit/StockPrices">GitHub</a></h3>
                                <h5>Implemented with IEX Stocks API, React.js / Redux, Google Charts, and Semantic-UI</h5>

                                <h2>Search for a company to view stock data.</h2>
                            </div>
                        }
                         <div className={"search-bar"}>
                                <SearchCompany />
                         </div>
                    </div>
                    <div className={"news-container"}>
                        {
                            this.state.news ? 
                                <Card.Group itemsPerRow={2}>
                                    {this.renderNewsCards(this.state.news)}
                                </Card.Group>
                            :
                                null

                        }
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