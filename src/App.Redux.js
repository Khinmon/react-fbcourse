function reducer(state = [], action) {
  if (action.type === "Plus") {
    return [...state, action.name];
  }
  return state;
}

const store = Redux.createStore(reducer);

store.dispatch({ type: "Plus", name: "Ball" });
