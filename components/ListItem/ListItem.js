/**
 * Created by Sylvain on 23/11/2016.
 */
import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var zipcode = this.props.selectfield1;
    var departement = "Accounting";
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
          return <p key={'recherche index-' + i}>{dataRecieve.contact_email}</p>
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
