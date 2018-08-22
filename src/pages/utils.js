import React from 'react';
import './utils.css';

class Utils extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: ''
    }
  }

  showUtil = (e) => {
    this.setState({
      selected: e.currentTarget.id
    })
  }

  render() {

    const myUtils = Object.keys(this.props.utils);
    const utils = this.props.utils;
    console.log(myUtils, utils);

    return (
      <div>
        <ul className='utils-list' >
          {
            myUtils.map((el, k) => {
              return (
                <li key={k} id={k} onClick={this.showUtil} className="util-wrapper">
                  <h3>{utils[el].name}</h3>
                </li>
              )
            })
          }
        </ul >
        {
          (this.state.selected !== "") &&
          <div>
            <h2>{utils[myUtils[this.state.selected]].name}</h2>
            <br />
            <hr />
            <p>{utils[myUtils[this.state.selected]].text}</p>
          </div>
        }
      </div>
    )
  }
}

export default Utils;