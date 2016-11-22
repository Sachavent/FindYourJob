import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: -34.397, lng: 150.644}}
  />
));


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "A"
    };
    // Bind needed to use "setState" in handleChange method
    this.handleChange = this.handleChange.bind(this);
  }

  // Method called on SelectField change
  handleChange(event) {
    console.log("index selectfield: "+event.target.value);
    this.setState( {value:event.target.value})
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className="mdl-grid" style={{backgroundColor:'red'}}>
          <div className="mdl-cell mdl-cell--2-col">
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
          </select>
          </div>
          <div className="mdl-cell mdl-cell--2-col">
          {/*
          OnTouchTap not working, so using Onclick method
          */}
          <FlatButton
            icon={<SearchIcon />}
            onClick={()=> {
              console.log("statefield values recieve: "+this.state.value);
            }}
          />
          </div>
        </div>

        <div className="demo-grid-2 mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
             liste items

          </div>
          <div className="mdl-cell mdl-cell--8-col">
            <SimpleMapExampleGoogleMap
              containerElement={
                <div style={{
                  position: 'relative',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: '70vh',
                  width: '100%',
                }}/>
              }
              mapElement={
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}/>
              }
            />
          </div>
        </div>

      </Layout>
    );
  }

}

export default HomePage;
