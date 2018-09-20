import React from "react";
import { Modal } from "react-bootstrap";
import "./landing-page.css";

class LandingPage extends React.Component {
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
    const photos = this.props.general.photos;

    return (
      <div>
        <div>
          <h1>History of the Team</h1>
          <hr />
          <div className="text">
            <p>{this.props.general.text}</p>
          </div>
          <hr />
          <h1>Photo Gallery</h1>
          <hr />
          <div className="image-list">
            {photos &&
              Object.keys(photos).map((el, k) => {
                return (
                  <div key={k} id={k} src={el} className="img-wrapper">
                    <img
                      className="landing-image"
                      alt="presentation"
                      src={photos[el]}
                      onClick={this.openModal}
                    />
                    <hr className="photo-separator" />
                  </div>
                );
              })}
          </div>
          <hr />
        </div>
        <Modal
          dialogClassName="landing-modal"
          show={this.state.show}
          onHide={this.closeModal}
        >
          <Modal.Body>
            <img alt="modal" src={this.state.src} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default LandingPage;
