import React from 'react';
import './teams.css';
import { Modal } from 'react-bootstrap';
import Member from '../components/member';

class Teams extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '',
      show: false,
      src: ''
    }
  }

  showTeam = (e) => {
    this.setState({
      selected: e.currentTarget.id
    })
  }

  openModal = (e) => {
    this.setState({
      show: true,
      src: e.currentTarget.src
    })
  }

  closeModal = () => {
    this.setState({
      show: false,
      src: ''
    })
  }

  render() {

    const myTeams = Object.keys(this.props.teams);
    const team = this.props.teams;
    const myPath = team[myTeams[this.state.selected]];

    return (
      <div>
        <ul className='teams' >
          {
            myTeams.map((el, k) => {
              return (
                <li className="list-member-wrapper" key={k} id={k} name={el} onClick={this.showTeam}>
                  <h3 className="list-member">{`${el}`}</h3>
                </li>
              );
            })
          }
        </ul >

        {(this.state.selected) && (
          <div>
            <div className="history-div">
              <h2>{`Brief history of ${myTeams[this.state.selected]}`}</h2>
              <p clas="history-text">{this.props.history[myTeams[this.state.selected]].text}</p>
            </div>
            <hr />
            <div>
              <Member data={myPath} openModal={this.openModal} />
            </div>
          </div>
        )}
        <Modal show={this.state.show} onHide={this.closeModal} >
          <Modal.Body>
            <img alt="modal" src={this.state.src} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Teams;