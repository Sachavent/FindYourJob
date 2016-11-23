import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import GoogleMap from '../../components/GoogleMap/MyGoogleMap'

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Layout className={s.content}>
        <div className="mdl-grid" style={{backgroundColor:'grey'}}>
          <div className="mdl-cell mdl-cell--3-col">
            <SelectField value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
          </div>
          <div className="mdl-cell mdl-cell--2-col">
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
            <GoogleMap/>
          </div>
        </div>

      </Layout>
    );
  }

}

export default HomePage;
