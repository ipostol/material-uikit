import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import deepEqual from 'deep-equal';
import SearchMarker from '../SearchMarker';

const mapOptions = {
  minZoom: 6,
  maxZoom: 19,
  scrollwheel: false,
};

const styles = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

const londonBorder = [51.769042247410624,
  -0.6347225635601887, 51.21154194283588, 0.38151278800231125];

class Map extends PureComponent {

  constructor(props) {

    super(props);
    this.state = {
      center: props.center,
      place: props.location,
      map: {
        offsetWidth: 1000,
        offsetHeight: 1000,
      },
      coordinates: props.coordinates,
      zoom: props.zoom,
      //
      calls: [],
      timeout: null,
      isFirstCall: true,
      defaultCoordinates: props.coordinates,
    };

  }

  /**
   * waiting map loaded and tigger calculate coordinates, center, zoom for show actualy data
   */
  componentDidMount() {

    const { coordinates } = this.props;

    this.state.map = this.map;
    if (!this.state.center) this.changeByCoordinates(coordinates);

  }

  /**
   * @param {object} nextProps
   * listen receiveProps update for change map properties by new coordinates
   */
  componentWillReceiveProps(nextProps) {

    const { location, coordinates } = this.props;

    if (location !== nextProps.location) {

      this.setState({
        place: nextProps.location,
      });

    }

    // change coordinates without onChange method
    if (
      !deepEqual(this.state.coordinates, nextProps.coordinates) &&
      !deepEqual(coordinates, nextProps.coordinates)
    ) {

      this.changeByCoordinates(nextProps.coordinates);

    }

    // prevent useles change call, when return to defaultCoordinates
    // (course defaultCoordinates is approximate)
    if (
      deepEqual(nextProps.coordinates, this.state.defaultCoordinates) &&
      !deepEqual(coordinates, nextProps.coordinates)
    ) {

      this.state.isFirstCall = true;

    }

  }

  /**
   * trigger when GoogleMap tigger onChange callback
   * if api/map loaded accumulate calls, and use last after 200ms
   * if api/map not loaded set initBouds for customize coordinates
   */
  onChange = ({ bounds: { nw, se }, center, zoom }) => {

    const { onChange } = this.props;
    const { calls, timeout } = this.state;

    calls.push({ nw, se });

    if (!timeout) {

      this.state.timeout = setTimeout(() => {

        const { nw: nw2, se: se2 } = calls[calls.length - 1];

        this.setState({
          center,
          zoom,
          coordinates: [nw2.lat, nw2.lng, se2.lat, se2.lng],
        }, () => {

          if (this.state.isFirstCall) {

            this.state.isFirstCall = false;

          } else {

            onChange([nw2.lat, nw2.lng, se2.lat, se2.lng]);

          }

        });

        this.state.timeout = null;
        this.state.calls = [];

      }, 200);

    }

  };

  /**
   * change map params by coordinates
   * @param {number[]} coordinates
   * @param {{ maxZoom: number }}
   */
  changeByCoordinates = (coordinates, { maxZoom } = {}) => {

    if (
      coordinates &&
      coordinates[0] === coordinates[2] &&
      coordinates[1] === coordinates[3]
    ) {

      this.setState({
        center: {
          lat: coordinates[0],
          lng: coordinates[1],
        },
        zoom: 15,
      });

    } else {

      const { center, zoom } = this.fitBounds(coordinates || londonBorder);

      this.setState({
        center,
        zoom: maxZoom ? Math.min(maxZoom, zoom) : zoom,
        coordinates,
      });

    }

  };

  /**
   * calculate map properties by coordinates
   * @param {number[]|object} coordinates
   * @return {object}
   */
  fitBounds(coordinates) {

    const bounds = {
      nw: {
        lat: coordinates[0],
        lng: coordinates[1],
      },
      se: {
        lat: coordinates[2],
        lng: coordinates[3],
      },
    };

    const { offsetWidth, offsetHeight } = this.state.map;

    const size = {
      width: offsetWidth,
      height: offsetHeight,
    };

    return fitBounds(bounds, size);

  }

  /**
   * make markers (any tipes, clustering) by props
   * @return {ReactMarkup[]}
   */
  markers() {

    const { markers } = this.props;
    const { place } = this.state;

    const list = [...markers];

    if (place) {

      const [lat, lng] = place;

      list.unshift(
        <SearchMarker
          key="search"
          lat={lat}
          lng={lng}
        />,
      );

    }

    return list;

  }

  /**
   * @return {ReactElement}
   */
  render() {

    return (
      <div style={styles} ref={c => (this.map = c)}>
        <GoogleMap
          onChange={this.onChange}
          center={this.state.center}
          zoom={this.state.zoom}
          hoverDistance={100}
          bootstrapURLKeys={{
            key: 'AIzaSyAAFXTWAvZDjwWtFHa7sdW_-D42WVob39Q',
            language: 'en',
            libraries: 'places',
          }}
          options={mapOptions}
          yesIWantToUseGoogleMapApiInternals
        >
          {
            this.markers()
          }
        </GoogleMap>
      </div>
    );

  }

}

Map.propTypes = {
  center: PropTypes.any,
  zoom: PropTypes.number,
  coordinates: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  location: PropTypes.array,
  markers: PropTypes.array,
};

Map.defaultProps = {
  markers: [],
  onChange() {},
};

export default Map;
