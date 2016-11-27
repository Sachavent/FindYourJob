/**
 * Created by Sylvain on 23/11/2016.
 */
import React from 'react';


class ListItem extends React.Component {

  render() {
    return (
      <p>{this.props.value}</p>
    );
  }

}

export default ListItem;
