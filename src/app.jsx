import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import CurrencyConverter from './scenes/CurrencyConverter';
import reducers from './reducers';
import './styles/index.scss';

function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );
}

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <CurrencyConverter />
    </Provider>
  );
}

export default App;
