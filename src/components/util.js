import React from 'react';
import { Link } from 'react-router-dom';

class Util extends React.Component {


  render() {
    console.log(this.props);
    return (
      <div className='utils-list' >
        {
          <span>{this.props}</span>
        }
      </div >
    )
  }
}

export default Util;