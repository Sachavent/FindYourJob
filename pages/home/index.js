import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import GoogleMap from '../../components/MyGoogleMap'


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 75001};
  }

  handleChange = (event, index, value) => this.setState({value});

  /*Getting Json Data before rendering the page */
  componentWillMount() {
    var data = require('./data.json');
    var obj = data[1];
    console.log("Name: " + obj.contact_email);
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className="mdl-grid" style={{backgroundColor:'grey'}}>
          <div className="mdl-cell mdl-cell--3-col">
            <SelectField value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={75001} primaryText="Paris, 75001" />
              <MenuItem value={75002} primaryText="Paris, 75002" />
              <MenuItem value={75003} primaryText="Paris, 75003" />
              <MenuItem value={75004} primaryText="Paris, 75004" />
              <MenuItem value={75005} primaryText="Paris, 75005" />
              <MenuItem value={75006} primaryText="Paris, 75006" />
              <MenuItem value={75007} primaryText="Paris, 75007" />
              <MenuItem value={75008} primaryText="Paris, 75008" />
              <MenuItem value={75009} primaryText="Paris, 75009" />
              <MenuItem value={75010} primaryText="Paris, 75010" />
              <MenuItem value={75011} primaryText="Paris, 75011" />
              <MenuItem value={75012} primaryText="Paris, 75012" />
              <MenuItem value={75013} primaryText="Paris, 75013" />
              <MenuItem value={75014} primaryText="Paris, 75014" />
              <MenuItem value={75015} primaryText="Paris, 75015" />
              <MenuItem value={75016} primaryText="Paris, 75016" />
              <MenuItem value={75017} primaryText="Paris, 75017" />
              <MenuItem value={75018} primaryText="Paris, 75018" />
              <MenuItem value={75019} primaryText="Paris, 75019" />
              <MenuItem value={75020} primaryText="Paris, 75020" />
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
