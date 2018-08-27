import React from 'react';
import { Modal } from 'react-bootstrap';
import './utils.css';

class Utils extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '',
      show: false,
      src: ''
    }
  }

  showUtil = (e) => {
    this.setState({
      selected: e.currentTarget.id
    })
  }

  openModal = (e) => {
    this.setState({
      show: true,
      src: e.currentTarget.src
    })
  }

  closeModal = () => {
    this.setState({
      show: false,
      src: ''
    })
  }

  render() {

    const myUtils = Object.keys(this.props.utils);
    const utils = this.props.utils;
    const myPath = utils[myUtils[this.state.selected]];

    return (
      <div>
        <ul className='utils-list' >
          {
            myUtils.map((el, k) => {
              return (
                <li key={k} id={k} onClick={this.showUtil} className="util-wrapper">
                  <h3 className="util-title">{utils[el].name}</h3>
                </li>
              )
            })
          }
        </ul >
        {
          (this.state.selected !== "") &&
          <div>
            <h2>{myPath.name}</h2>
            <br />
            <hr />
            <div className="util-text-wrapper">
              <p>{myPath.text}</p>
            </div >
            <hr />
          </div>
        }
        {
          (this.state.selected !== "" && myPath.photos !== undefined) && (
            <div>
              <h2>Relevant photos</h2>
              <ul className="photo-list">
                {(myPath.photos).map((el, k) => {
                  return (
                    <li key={k} className="photo-item" >
                      <span className="photo-number">{k}</span>
                      <img alt="util" className="img" src={el} onClick={this.openModal} />
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        }
        <Modal show={this.state.show} onHide={this.closeModal} >
          <Modal.Body>
            <img alt="util-modal" src={this.state.src} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Utils;