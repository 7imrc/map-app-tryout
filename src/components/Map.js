import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';



    const MyMapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRBUF2UVab_IvfyF7rJPQNzWaF8fs-dN8&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )( (props) =>
      <GoogleMap
        defaultZoom={ props.zoom }
        defaultCenter={{lat: -34.397, lng: 150.644} }
      >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
    );

class Map extends Component {

  render() {
    return (
      <div style={{height: 1000, width: 600, background:"red"}}>
        <MyMapComponent
          isMarkerShown
        />
      </div>
    );
  }
};

export default Map;
