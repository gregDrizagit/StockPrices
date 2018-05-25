const stockData = (state = {
    //default values
    symbols: [], 
    symbol: '', 
    quote: {}
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

      default:
      return state
    }
  }
  export default stockData