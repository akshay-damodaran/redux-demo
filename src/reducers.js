const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + action.payload.value;
    case 'DECREMENT': return state - action.payload.value;
    default: return state;
  }
}

export default counter;
