import React from 'react';
import Member from '../components/member';

class Teams extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: ''
    }
    this.showTeam = this.showTeam.bind(this);
  }

  showTeam = (e) => {
    console.log(e.currentTarget.id, this.state.selected);
    this.setState = ({
      selected: e.currentTarget.id
    })
  }

  render() {

    console.log(this.state);
    const myTeams = Object.keys(this.props.teams);
    const team = this.props.teams;

    return (
      <div>
        <div className='teams' >
          {
            myTeams.map((el, k) => {
              return (
                <div className="team-list-member" key={k} id={k} onClick={this.showTeam}>
                  <h1>{`${el}`}</h1>
                </div>
              );
            })
          }
        </div >

        {(this.state.selected !== '') &&
          (
            <div>
              <Member data={team.myTeams[this.state.selected]} />
            </div>
          )}
      </div>
    )
  }
}

export default Teams;