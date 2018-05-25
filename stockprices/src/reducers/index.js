const stockData = (state = {
    //default values
}
, action) => {
    switch (action.type) {
      case 'ADD_SYMBOLS':
        return {
          ...state,
            symbols: action.symbols
        }

      default:
      return state
    }
  }
  export default stockData