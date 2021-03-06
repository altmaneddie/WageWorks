import React from "react";
import "./connections.css";

class Connections extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: undefined,
      data: ""
    };
  }

  showConnection = e => {
    this.setState({
      selected: e.currentTarget.id,
      data: e.currentTarget.data
    });
  };

  render() {
    const myCon = Object.keys(this.props.connections);
    const con = this.props.connections;
    let myPath = con[myCon[this.state.selected]];

    return (
      <div>
        <div>
          <div className="connections">
            {myCon.map((el, k) => {
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
                  onClick={this.showConnection}
                >
                  <h3 className="button-text-title">{con[el].name}</h3>
                  <h3 className="button-text">{con[el].role}</h3>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        {this.state.selected !== undefined && (
          <div className="members-list">
            {Object.keys(myPath.members).map((el, k) => {
              return (
                <li className="member" key={k}>
                  <div>Name: {myPath.members[el].name}</div>
                  <div>Position: {myPath.members[el].position}</div>
                  <div className="word-breaker">
                    E-mail: {myPath.members[el].email}
                  </div>
                </li>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Connections;
