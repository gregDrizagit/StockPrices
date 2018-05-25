const requestPrefix = 'https://api.iextrading.com/1.0';

class Companies{

 static getAllSymbols(){
    return fetch(requestPrefix + '/ref-data/symbols').then(resp => resp.json())
 }

 static getCompanyForSymbol(symbol){
     return fetch(requestPrefix + `/stock/${symbol}/company`).then(resp => resp.json())
 }

}

export default Companies; 