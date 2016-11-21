import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

const style = {
  margin: 12,
};

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
        <div>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
          </select>

          {/*
          OnTouchTap not working, so using Onclick method
          */}
          <FlatButton
            icon={<SearchIcon />}
            style={style}
            onClick={()=> {
              console.log("statefield values recieve: "+this.state.value);
            }}
          />
          </div>

      </Layout>
    );
  }

}

export default HomePage;
