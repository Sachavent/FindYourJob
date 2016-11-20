import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "A"};
  }

  handleChange = (event, index, value) => this.setState({value});
  render() {


      return (
      <Layout className={s.content}>
        <div>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
          </select>
          </div>

      </Layout>
    );
  }

}

export default HomePage;
