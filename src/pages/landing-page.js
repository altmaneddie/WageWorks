import React from 'react';
import "./landing-page.css";

class LandingPage extends React.Component {

  render() {
    const photos = this.props.general.photos;

    return (
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
          {photos && photos.map((el, k) => {
            return (
              <div key={k} id={k} src={el} className="img-wrapper">
                <img className="img" src={el} />
                <hr className="photo-separator" />
              </div>
            )
          })}
        </div>
        <hr />
      </div>
    )
  }
}

export default LandingPage;