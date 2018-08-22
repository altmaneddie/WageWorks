import React from 'react';
import './util.css';

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