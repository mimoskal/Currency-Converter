import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import CSSModules from '../../helpers/CSSModulesHelper';
import DropdownItem from './components/DropdownItem';
import styles from './styles.scss';

const propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  value: '',
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  handleChange(val) {
    const { name, onChange } = this.props;
    onChange(name, val);

    this.setState({
      opened: false,
    });
  }

  handleBlur(event) {
    const currentTarget = event.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({
          opened: false,
        });
      }
    }, 0);
  }

  toggleDropdown(e) {
    e.preventDefault();
    const { opened } = this.state;

    this.setState({
      opened: !opened,
    });
  }

  renderList() {
    const { opened } = this.state;
    const { items, value } = this.props;
    const current = value || items[0];

    if (!opened) {
      return null;
    }

    return (
      <div styleName="DropdownListWrapper">
        <Scrollbars
          autoHeight
          autoHeightMin={100}
          autoHeightMax={250}
          thumbMinSize={30}
        >
          <ul styleName="DropdownList">
            { items.map((item) => {
              const props = {};
              if (item === current) {
                props.active = true;
              }
              return (
                <DropdownItem {...props} key={item} item={item} onChange={this.handleChange} />
              );
            })}
          </ul>
        </Scrollbars>
      </div>
    );
  }

  render() {
    const { opened } = this.state;
    const { items, value } = this.props;
    const current = value || items[0];

    let wrapperClass = 'DropdownWrapper';
    if (opened) {
      wrapperClass += ' opened';
    }

    return (
      <div styleName={wrapperClass} onBlur={this.handleBlur}>
        <button onClick={this.toggleDropdown} styleName="DropdownTrigger">
          { current }
        </button>

        { this.renderList() }
      </div>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default CSSModules(styles, { allowMultiple: true })(Dropdown);
