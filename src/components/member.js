import React from 'react';
import './member.css';

class Member extends React.Component {
  render() {
    const teamMembers = Object.keys(this.props.data);
    const teamData = this.props.data;

    return (
      <div >
        {
          teamMembers.map((el, k) => {
            return (
              <div key={k}>
                <ul className="member-ul">
                  <li><img src={teamData[el].photo} className="member-img" onClick={this.props.openModal} /></li>
                  <li>{`Name: `}</li>
                  <div className="long-text-wrapper">
                    <li className="long-text-data">{teamData[el].last_name} {teamData[el].first_name}</li>
                  </div>
                  <li>{`Platform: ${teamData[el].platform}`}</li>
                  <li>{`Years: ${teamData[el].years}`}</li>
                  <li>{`Hobbies:`}</li>
                  <div className="long-text-wrapper">
                    <li className="long-text-data">{teamData[el].hobbies}</li>
                  </div>
                  <li>{`Birthday: ${teamData[el].birthday}`}</li>
                </ul>
                <hr />
              </div>
            )
          })
        }
      </div >
    )
  }
}

export default Member;