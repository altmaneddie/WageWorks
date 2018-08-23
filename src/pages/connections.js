import React from 'react';
import './connections.css';

class Connections extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '',
      data: ''
    }
  }

  showConnection = (e) => {
    this.setState({
      selected: e.currentTarget.id,
      data: e.currentTarget.data
    })
    console.log(e.currentTarget);
  }

  render() {

    const myCon = Object.keys(this.props.connections);
    const con = this.props.connections;

    return (
      <div>
        <div>
          <div className="connections">
            {
              myCon.map((el, k) => {
                return (
                  <div className="connections-list" key={k} id={k} data={el} onClick={this.showConnection}>
                    <h1>{con[el].name}</h1>
                    <h3>{con[el].role}</h3>
                  </div>
                )
              })
            }
          </div>
          <hr />
        </div>

        {(this.state.selected) && (
          <div className="members-list">
            {con[myCon[this.state.selected]].members.map((el, k) => {
              return (
                <li className="member" key={k}>
                  <div>Name: {el.name}</div>
                  <div>Position: {el.position}</div>
                  <div>E-mail: {el.email}</div>
                  <hr />
                </li>
              )
            })}
          </div>
        )

        }
      </div>
    )
  }
}

export default Connections;