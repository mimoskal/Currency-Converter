import { combineReducers } from 'redux';
import { ratesReceived, ratesError, ratesLoading, ratesFinalResult } from './scenes/CurrencyConverter/reducer';

export default combineReducers({
  ratesReceived,
  ratesError,
  ratesLoading,
  ratesFinalResult,
});
