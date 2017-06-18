import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button';
import Cols from '../../../../components/Cols';
import Col from '../../../../components/Cols/components/Col';
import Form from '../../../../components/Form';
import FormRow from '../../../../components/Form/components/FormRow';
import Input from '../../../../components/Form/components/Input';
import SwapButton from './components/SwapButton';
import Dropdown from '../../../../components/Dropdown';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  result: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

class CurrencyConverterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      from: 'USD',
      to: 'EUR',
      amount: '',
      amountValid: true,
    };

    this.currencies = [
      'AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD',
      'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD',
      'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR',
    ];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwap = this.handleSwap.bind(this);
  }

  handleSwap(e) {
    e.preventDefault();

    const { from, to } = this.state;

    this.setState({
      from: to,
      to: from,
    });
  }

  handleChange(name, val) {
    const stateUpdate = {
      [name]: val,
    };

    if (name === 'amount') {
      stateUpdate.amountValid = true;
    }

    this.setState(stateUpdate);
  }

  handleSubmit() {
    const { amount, from, to } = this.state;
    const { onSubmit } = this.props;

    if (!amount) {
      return this.setState({
        amountValid: false,
      });
    }

    const data = { amount, from, to };

    return onSubmit(data);
  }

  render() {
    const { from, to, amount, amountValid } = this.state;
    const { result } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Cols>
          <Col>
            <FormRow>
              <Dropdown
                onChange={this.handleChange}
                name="from"
                value={from}
                items={this.currencies}
              />
            </FormRow>
            <FormRow>
              <Input
                type="number"
                placeholder="Amount"
                name="amount"
                value={amount}
                onChange={this.handleChange}
                valid={amountValid}
              />
            </FormRow>
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <SwapButton onClick={this.handleSwap} />
          </Col>
          <Col>
            <FormRow>
              <Dropdown
                onChange={this.handleChange}
                name="to"
                value={to}
                items={this.currencies}
              />
            </FormRow>
            <FormRow>
              <Input
                type="number"
                placeholder="Result"
                name="result"
                value={result}
                onChange={this.handleChange}
                readOnly
              />
            </FormRow>
          </Col>
        </Cols>
        <FormRow style={{ textAlign: 'center', margin: '25px 0 35px' }}>
          <Button text="Calculate" />
        </FormRow>
      </Form>
    );
  }
}

CurrencyConverterForm.propTypes = propTypes;

export default CurrencyConverterForm;
