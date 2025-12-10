let reduxStore;

export const injectStore = (_store) => {
  reduxStore = _store;
};

export const dispatchTokens = (data) => {
  reduxStore.dispatch({ type: "auth/setTokens", payload: data });
};

export const dispatchLogout = () => {
  reduxStore.dispatch({ type: "auth/logout" });
};
