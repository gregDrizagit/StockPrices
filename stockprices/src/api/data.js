const requestPrefix = 'https://api.iextrading.com/1.0';

class Data{
    // /stock/aapl/financials
    
 static getStatsForSymbol(symbol){
    return fetch(requestPrefix + '/stock/aapl/stats').then(resp => resp.json())
 }

 static getFinancialsforSymbol(symbol){
     return fetch(requestPrefix + `/stock/${symbol}/company`).then(resp => resp.json())
 }

 static getDelayedQuoteForSymbol(symbol){
    return fetch(requestPrefix + `/stock/${symbol}/delayed-quote`).then(resp => resp.json())
}

}

export default Companies; 