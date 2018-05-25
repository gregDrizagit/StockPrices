
export const addSymbols = syms => ({
    type: 'ADD_SYMBOLS',
    symbols: syms
  })

export const selectSymbol = sym => ({
    type: 'SELECT_SYMBOLS',
    symbol: sym 
})

export const delayedQuote = quote => ({
    type: 'DELAYED_QUOTE',
    quote: quote 
})

export const peerSymbols = symbols => ({
    type: 'PEER_SYMBOLS',
    peerSymbols: symbols 
})
