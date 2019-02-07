import React from "react";
import "./repository.css";

class Repository extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: undefined,
      data: ""
    };
  }

  showTemplate = e => {
    this.setState({
      selected: e.currentTarget.id,
      data: e.currentTarget.data
    });
  };

  render() {

    const myTemplates = Object.keys(this.props.templates);
    const templates = this.props.templates;
    let myPath = templates[myTemplates[this.state.selected]];

    return (
      <div>
        <div>
          <div className="connections">
            {myTemplates.map((el, k) => {
              return (
                <div
                  className={`connections-list ${
                    parseInt(this.state.selected, 10) === k
                      ? "connections-list-selected"
                      : ""
                    }`}
                  key={k}
                  id={k}
                  data={el}
                  onClick={this.showTemplate}
                >
                  <h3 className="button-text-title">{templates[el].name}</h3>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        {
          this.state.selected !== undefined && (
            <div className="members-list">

              <li className="member" key={this.state.selected} >
                <div>Name: {myPath.content.title}</div>
                <div>Link: {myPath.content.link}</div>
              </li>

            </div>
          )
        }
      </div >
    );
  }
}

export default Repository;
