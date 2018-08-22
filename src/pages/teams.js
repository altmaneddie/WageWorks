import React from 'react';
import './teams.css';
import Member from '../components/member';

class Teams extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '',
      name: ''
    }
  }

  showTeam = (e) => {
    console.log(e.currentTarget)
    this.setState({
      selected: e.currentTarget.id,
      name: e.currentTarget.name
    })
  }

  render() {

    const myTeams = Object.keys(this.props.teams);
    const team = this.props.teams;

    return (
      <div>
        <div></div>
        <div className='teams' >
          {
            myTeams.map((el, k) => {
              return (
                <div className="list-member-wrapper" key={k} id={k} name={el} onClick={this.showTeam}>
                  <h1 className="list-member">{`${el}`}</h1>
                </div>
              );
            })
          }
        </div >

        {(this.state.selected) && (
          <div>
            <div className="history-div">
              <h2>{`Brief history of ${myTeams[this.state.selected]}`}</h2>
              <p>{this.props.history[myTeams[this.state.selected]].text}</p>
            </div>
            <hr />
            <div>
              <Member data={team[myTeams[this.state.selected]]} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Teams;