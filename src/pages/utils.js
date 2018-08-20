import React from 'react';
import { Link } from 'react-router-dom';

class Utils extends React.Component {


  render() {

    const myUtils = Object.keys(this.props.utils);
    const utils = this.props.utils;
    console.log(myUtils, utils);

    return (
      <div className='utils-list' >
        {
          myUtils.map((el, k) => {
            return (
              <div>
                <Link key={k} to={{
                  pathname: '/util/',
                  hash: utils[el].name,
                  state: { util: utils[el] }
                }}>
                {utils[el].name}
                </Link>
              </div>
            )
          })
        }
      </div >
    )
  }
}

export default Utils;