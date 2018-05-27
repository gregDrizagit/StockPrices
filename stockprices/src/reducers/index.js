const stockData = (state = {
    //default values
    symbols: [], 
    symbol: '', 
    quote: null, 
    peerSymbols: [], 
    companyStats: [], 
    book: null
}
, action) => {
    switch (action.type) {
      case 'ADD_SYMBOLS':
        return {
          ...state,
            symbols: action.symbols
        }
        case 'SELECT_SYMBOLS':
        return {
          ...state,
            symbol: action.symbol
        }
        case 'DELAYED_QUOTE':
        return {
          ...state,
            quote: action.quote
        }
        case 'PEER_SYMBOLS':
        return {
          ...state,
            peerSymbols: action.peerSymbols
        }
        case 'ADD_STATS':
        return {
          ...state,
            companyStats: action.companyStats
        }
        case 'ADD_BOOK':
        return {
          ...state,
            book: action.book
        }

      default:
      return state
    }
  }
  export default stockData