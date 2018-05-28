const requestPrefix = 'https://api.iextrading.com/1.0';

class Data{

    // /stock/market/list/mostactive
    // /stock/market/list/gainers
    // /stock/market/list/losers



    static getBookForSymbol(symbol){
        return fetch(requestPrefix + `/stock/${symbol}/book`).then(resp => resp.json())
    }

    static getChartForSymbolAtInterval(symbol, interval){
        return fetch(requestPrefix + `/stock/${symbol}/chart/${interval}`).then(resp => resp.json())
    }
        
    static getStatsForSymbol(symbol){
        return fetch(requestPrefix + `/stock/${symbol}/stats`).then(resp => resp.json())
    }

    static getFinancialsForSymbol(symbol){
        return fetch(requestPrefix + `/stock/${symbol}/financials`).then(resp => resp.json())
    }
    
    static getGainersList(){
        return fetch(requestPrefix + `/stock/market/list/losers`).then(resp => resp.json())

    }
    static getLosersList(){
        return fetch(requestPrefix + `/stock/market/list/gainers`).then(resp => resp.json())

    }
    static getMostActive(){
        return fetch(requestPrefix + `/stock/market/list/mostactive`).then(resp => resp.json())

    }

    static getMarketOverview(){
        return fetch(requestPrefix + '/stock/market/batch?symbols=SPY,DIA,ONEQ&types=quote,chart').then(resp => resp.json())
    }

}

export default Data; 
