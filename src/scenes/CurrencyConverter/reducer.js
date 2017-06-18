export function ratesError(state = false, action) {
  switch (action.type) {
    case 'GET_RATES_ERROR':
      return action.isError;

    default:
      return state;
  }
}

export function ratesLoading(state = false, action) {
  switch (action.type) {
    case 'GET_RATES_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function ratesReceived(state = {}, action) {
  switch (action.type) {
    case 'GET_RATES_RECEIVED':
      return { ...action.items };

    default:
      return state;
  }
}

export function ratesFinalResult(state = '', action) {
  switch (action.type) {
    case 'GET_RATES_RESULT':
      return action.result;

    default:
      return state;
  }
}
