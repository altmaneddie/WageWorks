import React from 'react';
import './updates.css';

class Updates extends React.Component {

  render() {

    const myUpdates = Object.keys(this.props.updates);
    const updates = this.props.updates;

    return (
      <div>
        {
          myUpdates.map((el, k) => {
            return (
              <div key={k} className="update-wrapper">
                <h1>{updates[el].title}</h1>
                <h4>{updates[el].sub_title}</h4>
                <p>{updates[el].text}</p>
                <span className="update-date">{updates[el].date}</span>
                <hr />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Updates;