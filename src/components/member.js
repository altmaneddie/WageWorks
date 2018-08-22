import React from 'react';
import './member.css';

class Member extends React.Component {
  render() {
    const teamMembers = Object.keys(this.props.data);
    const teamData = this.props.data;
    // console.log(teamMembers)

    return (
      <div >
        {
          teamMembers.map((el, k) => {
            return (
              <div key={k}>
                <ul className="member-ul">
                  <li><img src={teamData[el].photo} className="member-img" /></li>
                  <li>{`Name: ${teamData[el].last_name} ${teamData[el].first_name}`}</li>
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