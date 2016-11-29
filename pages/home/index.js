import React, {PropTypes} from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import {title, html} from './index.md';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import GoogleMap from '../../components/MyGoogleMap';
import ListItem from '../../components/ListItem';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectfieldZipCode: 75001,
      selectfieldDepartment: "Accounting",
      dataRecieve: [],
      buttonPress: false,
    };
  }

  handleChangeSelectFieldZipCode = (event, index, selectfieldZipCode) => this.setState({selectfieldZipCode});
  handleChangeSelectFieldDepartment = (event, index, selectfieldDepartment) => this.setState({selectfieldDepartment});


  /*Getting Json Data before rendering the page */
  componentWillMount() {
    var data = require('./data.json');
    this.setState({dataRecieve: data});
  }

  render() {
    /* Array with the selectfield values*/
    var valuesSelectfieldZipCode = [75001, 75002, 75003, 75004, 75005, 75006, 75007, 75008, 75009, 75010, 75011, 75012, 75013, 75014, 75015, 75016, 75017, 75018, 75019, 75020];
    var valuesSelectfieldDepartment = ["Accounting", "Marketing", "Business Development", "Services", "Human Resources", "Support", "Training", "Research and Development"];

    return (
      <Layout className={s.content}>
        <div className={`mdl-grid ${s.searchbar}`}>

          {/* Zipcode Selectfield */}
          <div className="mdl-cell mdl-cell--3-col">
            <SelectField value={this.state.selectfieldZipCode} onChange={this.handleChangeSelectFieldZipCode}>
              {valuesSelectfieldZipCode.map((zipcode, i) => (
                <MenuItem key={i} value={zipcode} primaryText={"Paris, " + zipcode}/>
              ))}
            </SelectField>
          </div>

          {/* Department Selectfield */}
          <div className="mdl-cell mdl-cell--3-col">
            <SelectField value={this.state.selectfieldDepartment} onChange={this.handleChangeSelectFieldDepartment}>
              {valuesSelectfieldDepartment.map((department, i) => (
                <MenuItem key={i} value={department} primaryText={department}/>
              ))}
            </SelectField>
          </div>

          {/* Searching button*/}
          <div className="mdl-cell mdl-cell--2-col">
            <FlatButton
              icon={<SearchIcon />}
              onClick={()=> {
                this.setState({buttonPress: this.state.buttonPress = true});
              }

              }
            />
          </div>
        </div>

        {/* List Item display*/}
        <div className="demo-grid-2 mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <ListItem {...this.state} />
          </div>

          {/* Google Map component*/}
          <div className="mdl-cell mdl-cell--8-col">
            <GoogleMap/>
          </div>
        </div>

      </Layout>
    );
  }

}


export default HomePage;
