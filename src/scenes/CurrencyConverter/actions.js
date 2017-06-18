import request from 'superagent';

export function ratesError(bool) {
  return {
    type: 'GET_RATES_ERROR',
    isError: bool
  };
}

export function ratesLoading(bool) {
  return {
    type: 'GET_RATES_LOADING',
    isLoading: bool
  };
}

export function ratesFetchSuccess(items) {
  return {
    type: 'GET_RATES_RECEIVED',
    items
  };
}

export function ratesResult(result) {
  return {
    type: 'GET_RATES_RESULT',
    result
  };
}

/**
 * Calculate value based on given currency and amount.
 *
 * @param data {Object}
 * @param to {String}
 * @param amount {Number}
 * @returns {function(*)}
 */
export function ratesCalculate(data, to, amount) {
  return (dispatch) => {
    const { rates } = data;

    if (data.base === to) {
      dispatch(ratesResult(amount));
      dispatch(ratesError(false));
      return dispatch(ratesLoading(false));
    }

    if (!rates || !rates[to]) {
      return dispatch(ratesError(true));
    }

    const rate = rates[to];
    let result = amount * rate;

    result = result.toFixed(2);

    dispatch(ratesResult(result));
    dispatch(ratesError(false));
    dispatch(ratesLoading(false));
  };
}

/**
 * Perform API call to retrieve currency rates.
 *
 * @param from {String}
 * @param to {String}
 * @param amount {Number}
 * @returns {function(*)}
 */
export function ratesFetch(from, to, amount) {
  return (dispatch) => {
    dispatch(ratesLoading(true));
    const url = `http://api.fixer.io/latest?base=${from}`;

    request
      .get(url)
      .end((err, res) => {
        if (err) {
          dispatch(ratesError(true));
          return dispatch(ratesLoading(false));
        }
        const data = JSON.parse(res.text);

        dispatch(ratesFetchSuccess(data));
        dispatch(ratesCalculate(data, to, amount));
      });
  };
}
