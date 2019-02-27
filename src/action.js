export function incrementValue(value) {
  return ({
    type: 'INCREMENT',
    payload: {
      value,
    }
  });
}

export function decrementValue(value) {
  return ({
    type: 'DECREMENT',
    payload: {
      value,
    }
  });
}
