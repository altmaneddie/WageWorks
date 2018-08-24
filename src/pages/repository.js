import React from 'react';
import './repository.css';

class Repository extends React.Component {

  render() {

    const myTemplates = Object.keys(this.props.templates);
    const templates = this.props.templates;

    return (
      <div className="templates-list">
        {
          myTemplates.map((el, k) => {
            return (
              <div className="template">
                <h3>{templates[el].title}</h3>
                <p>{templates[el].text}</p>
                <a target="_blank" href={templates[el].link}>{templates[el].link}</a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Repository;