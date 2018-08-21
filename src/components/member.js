import React from 'react';

class Member extends React.Component {
  render() {
    const teamMembers = Object.keys(this.props.data);
    const teamData = this.props.data;
    console.log(teamMembers)

    return (
      <div >
        {
          teamMembers.map((el, k) => {
            return (
              <div key={k}>
                <span>{`Name:${teamData[el].last_name} / ${teamData[el].first_name}`}</span>
              </div>
            )
          })
        }
      </div >
    )
  }
}

export default Member;