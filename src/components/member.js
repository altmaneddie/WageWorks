import React from 'react';

class Member extends React.Component {

  constructor() {
    super();
  }

  render() {
    const teamMembers = Object.keys(this.props.data);
    const teamData = this.props.data;
    console.log(teamMembers)

    return (
      <div >
        <span><em>{"Last Name/ First Name"}</em></span>
        {
          teamMembers.map((el, k) => {
            console.log(el);
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