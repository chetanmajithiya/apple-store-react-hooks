export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      let Result = []
      if (state.length !== 0) {
        for (let i = 0; i < state.length; i++) {
          if (action.value === state[i].itemId) {
            const OldState = []
            for (let j = 0; j < state.length; j++) {
              if (action.value !== state[j].itemId) {
                OldState.push(state[j])
              }
            }
            if (action.do === 'minus') {
              OldState.push({ id: state[i].id, itemId: state[i].itemId, Quantity: (state[i].Quantity - 1) })
            } else if (action.do === 'remove') {
              // nothing
            } else {
              OldState.push({ id: state[i].id, itemId: state[i].itemId, Quantity: (state[i].Quantity + 1) })
            }
            Result = OldState
          }
        }
        if (Result.length === 0) {
          Result = [...state, { id: (state.length + 1), itemId: action.value, Quantity: 1 }]
        }
      } else {
        Result.push({ id: (state.length + 1), itemId: action.value, Quantity: 1 })
      }
      return Result
    case 'update':
      return action.value
    case 'remove':
      const ResultState = []
      for (let i = 0; i < state.length; i++) {
        if (state[i].itemId !== action.value) {
          ResultState.push(state[i])
        }
      }
      return ResultState
    default:
      return state
  }
}
