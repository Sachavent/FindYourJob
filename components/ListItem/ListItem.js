/**
 * Created by Sylvain on 23/11/2016.
 */
import React from 'react';
import s from './ListItem.css';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var zipcode = this.props.selectfieldZipCode;
    var departement = this.props.selectfieldDepartment;
    var inputArray = [];
    /* Telling the number of the search result */
    var numberResponseGot = 0;

    /* Pushing selectfields value into inputArray for the search
     * inputArray [Zipcode, departement, size of data recieve]
     * */
    inputArray.push(zipcode);
    inputArray.push(departement);
    inputArray.push(this.props.dataRecieve.length);

    /* Priting data after search */
    function printdata(dataRecieve, i) {

      if (dataRecieve.zipcode == inputArray[0] && dataRecieve.department == inputArray[1]) {
        numberResponseGot++;
        return <li className={`${s.list}`} key={'recherche index-' + i}> {dataRecieve.title} - {dataRecieve.company}
          <br></br> {dataRecieve.address} </li>
      }

      /*Handling case where no result found */
      if ( (i+1) == inputArray[2]  && numberResponseGot == 0) {
        return <p> No result for this research</p>
      }
    }

    /*Loading the List Item if button search was pressed */
    if (this.props.buttonPress == true) {
      return (
        <div>
          {
            /*passing inputArray as extra argument */
            this.props.dataRecieve.map(printdata, inputArray)}
        </div>
      );
    } else {
      return (
        <div>
          <p> Veuillez procéder à une recherche.</p>
        </div>
      );
    }
  }

}


export default ListItem;
