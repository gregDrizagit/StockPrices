const stockData = (state = {
    //default values
    symbols: [], 
    symbol: ''
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

      default:
      return state
    }
  }
  export default stockData