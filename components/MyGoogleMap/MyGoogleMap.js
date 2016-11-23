/**
 * Created by Sylvain on 23/11/2016.
 */
import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import s from './MyGoogleMap.css';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: -34.397, lng: 150.644}}
  />
));

class MyGoogleMap extends React.Component {

  render() {
    return (
      <div>
        <SimpleMapExampleGoogleMap
          containerElement={
            <div className={`${s.container}`}/>
          }
          mapElement={
            <div className={`${s.map}`}/>
          }
        />
      </div>
    );
  }

}

export default MyGoogleMap;
