import React from "react";
import { Modal } from "react-bootstrap";
import "./leadership.css";

class Leadership extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      src: ""
    };
  }
  openModal = e => {
    this.setState({
      show: true,
      src: e.currentTarget.src
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
      src: ""
    });
  };

  render() {
    const myLeaders = Object.keys(this.props.leadership);
    const leaders = this.props.leadership;

    return (
      <div>
        {myLeaders.map((el, k) => {
          return (
            <div key={k}>
              <div className="leader-wrapper">
                <div className="image-wrapper">
                  <img
                    className="leader-image"
                    alt="leader"
                    src={leaders[el].photo}
                    onClick={this.openModal}
                  />
                </div>
                <div className="text-wrapper">
                  <h1>{leaders[el].name}</h1>
                  <p className="position">{leaders[el].position}</p>
                  <p className="description-text">{leaders[el].text}</p>
                  <span className="update-date">{leaders[el].date}</span>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
        <Modal show={this.state.show} onHide={this.closeModal}>
          <Modal.Body>
            <img alt="modal" src={this.state.src} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Leadership;
