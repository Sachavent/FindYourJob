/**
 * Created by Sylvain on 23/11/2016.
 */
import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var zipcode = this.props.selectfieldZipCode;
    var departement = this.props.selectfieldDepartment;
    var buttonPress = this.props.buttonPress;
    var inputArray = [];

    /* Pushing selectfields value into inputArray for the search
     * inputArray [Zipcode, departement, buttonSearchPress]
      * */
    inputArray.push(zipcode);
    inputArray.push(departement);
    inputArray.push(buttonPress);

    function printdata(dataRecieve, i) {
      if (inputArray[2] == true) {
        if (dataRecieve.zipcode == inputArray[0] && dataRecieve.department == inputArray[1]) {
          return <li style={{  padding: 15,
            marginBottom: 15,
            borderRadius: 5,
            listStyle: 'none',
            color:  'black',
            backgroundColor: '#ecf0f1'}} key={'recherche index-' + i}>{dataRecieve.contact_email}</li>
        }
      }
    }

    return (
      <div>
        {
          /*passing inputArray as extra argument */
          this.props.dataRecieve.map(printdata, inputArray)}
      </div>
    );
  }

}


export default ListItem;
