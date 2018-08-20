import React from 'react';
import Member from '../components/member';

class Teams extends React.Component {


  render() {

    const myTeams = Object.keys(this.props.teams);
    const team = this.props.teams;

    return (
      <div className='teams' >
        {
          myTeams.map((el, k) => {
            return (
              <div key={k}>
                <div className='team-name'>
                  <h1>{`Team:${el}`}</h1>
                </div>
                <div className='member'>
                  <Member data={team[el]} />
                </div>
              </div>
            )
          })
        }
      </div >
    )
  }
}

export default Teams;