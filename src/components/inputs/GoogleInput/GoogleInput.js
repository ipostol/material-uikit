import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PlacesAutocomplete from 'react-places-autocomplete';
import PlaceIcon from '../../icons/PlaceStroke';
import styles from './GoogleInput.scss';

class GoogleInput extends PureComponent {

  state = {
    value: '',
  };

  onChange = value => this.setState({ value });

  select = (name, id) => {

    const { onLocationChange } = this.props;

    onLocationChange({ name, id });
    this.setState({ value: '' });

  };

  render() {

    const inlineStyles = {
      autocompleteContainer: {
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0 0 8px 0 rgba(53, 68, 126, 0.05), 0 4px 8px 0 rgba(53, 68, 126, 0.09)',
        border: 'none',
        marginTop: '4px',
        paddingTop: '4px',
        paddingBottom: '4px',
        zIndex: '9',
      },
    };

    const { onLocationChange, className, ...rest } = this.props;

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
        <PlaceIcon style={{ marginRight: '16px', display: 'inline-block' }} />
        <span>
          <strong style={{ fontSize: '14px' }}>
            {formattedSuggestion.mainText}
          </strong>
          {' '}
          <small
            style={{
              color: '#9499b0',
              fontSize: '13px',
            }}
          >
            {formattedSuggestion.secondaryText}
          </small>
        </span>
      </div>
    );

    return (
      <PlacesAutocomplete
        inputProps={{ ...rest, value: this.state.value, onChange: this.onChange }}
        onSelect={this.select}
        styles={inlineStyles}
        highlightFirstSuggestion
        autocompleteItem={AutocompleteItem}
        googleLogo={false}
        classNames={{ input: cn(styles.input, className) }}
      />
    );

  }

}

GoogleInput.propTypes = {
  onLocationChange: PropTypes.func,
  className: PropTypes.string,
};

export default GoogleInput;
