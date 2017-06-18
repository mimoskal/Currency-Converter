import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrimaryLaytout from '../../components/PrimaryLayout';
import Box from '../../components/Box';
import Headline from '../../components/Headline';
import SmallText from '../../components/SmallText';
import ErrorMessage from '../../components/ErrorMessage';
import CurrencyConverterForm from './components/CurrencyConverterForm';
import { ratesFetch } from './actions';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  result: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const { isLoading } = this.props;
    const { from, to, amount } = data;

    if (!isLoading) {
      this.props.fetch(from, to, amount);
    }
  }

  renderErrorMessage() {
    const { isError } = this.props;

    if (!isError) {
      return null;
    }

    return <ErrorMessage message="Something went wrong" />;
  }

  render() {
    const { result, isLoading } = this.props;

    return (
      <PrimaryLaytout isLoading={isLoading}>
        <Box>
          <Headline>Currency I have:</Headline>
          { this.renderErrorMessage() }
          <CurrencyConverterForm result={result} onSubmit={this.handleSubmit} />
          <SmallText style={{ textAlign: 'center', margin: '0' }}>
            Actual data from:&nbsp;
            <a rel="noopener noreferrer" href="http://fixer.io" target="_blank">http://fixer.io</a>
          </SmallText>
        </Box>
      </PrimaryLaytout>
    );
  }
}

CurrencyConverter.propTypes = propTypes;

const mapStateToProps = (state) => {
  return {
    items: state.ratesReceived,
    isError: state.ratesError,
    isLoading: state.ratesLoading,
    result: state.ratesFinalResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (from, to, amount) => dispatch(ratesFetch(from, to, amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);
