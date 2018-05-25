const requestPrefix = 'https://api.iextrading.com/1.0';

class Data{
    // /stock/aapl/financials

    // /stock/aapl/chart
    // /stock/aapl/chart/5y
    // /stock/aapl/chart/2y
    // /stock/aapl/chart/1y
    // /stock/aapl/chart/ytd
    // /stock/aapl/chart/6m
    // /stock/aapl/chart/3m
    // /stock/aapl/chart/1m
    // /stock/aapl/chart/1d
    
 static getStatsForSymbol(symbol){
    return fetch(requestPrefix + `/stock/${aapl}/stats`).then(resp => resp.json())
 }

 static getFinancialsforSymbol(symbol){
     return fetch(requestPrefix + `/stock/${symbol}/company`).then(resp => resp.json())
 }



}

export default Companies; 