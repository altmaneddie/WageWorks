import React from 'react';
import './leadership.css';

class Leadership extends React.Component {

  render() {

    const myLeaders = Object.keys(this.props.leadership);
    const leaders = this.props.leadership;

    return (
      <div>
        {
          myLeaders.map((el, k) => {
            return (
              <div key={k} >
                <div className="leader-wrapper">
                  <div className="image-wrapper">
                    <img className="image" src={leaders[el].photo} />
                  </div>
                  <div className="text-wrapper">
                    <h1>{leaders[el].name}</h1>
                    <p className="position">{leaders[el].position}</p>
                    <p>{leaders[el].text}</p>
                    <span className="update-date">{leaders[el].date}</span>
                  </div>
                </div>
                <hr />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Leadership;