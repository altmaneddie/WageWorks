import React from "react";
import "./updates.css";

class Updates extends React.Component {
  render() {
    const myUpdates = Object.keys(this.props.updates);
    const revUpdates = myUpdates.reverse();
    const updates = this.props.updates;

    return (
      <div>
        {revUpdates.map((el, k) => {
          return (
            <div key={k} className="update-wrapper">
              <h1 className="update-title">{updates[el].title}</h1>
              <h4 className="update-subtitle">{updates[el].sub_title}</h4>
              <p className="update-text">{updates[el].text}</p>
              <span className="update-date">{updates[el].date}</span>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Updates;
