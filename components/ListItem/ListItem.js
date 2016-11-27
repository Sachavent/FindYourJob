/**
 * Created by Sylvain on 23/11/2016.
 */
import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    function readthis(dataRecieve, i ) {
      if (dataRecieve.zipcode == zipcode) {
        return <p key={'recherche index-' + i}>{dataRecieve.contact_email}</p>
      }
    }

    var zipcode;
    return (
      <div>
        <p>{this.props.value}</p>
        {
          this.props.dataRecieve.map(readthis, zipcode = this.props.value)}
      </div>
    );
  }

}


export default ListItem;
