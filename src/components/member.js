import React from "react";
import "./member.css";

class Member extends React.Component {
  render() {
    const teamMembers = Object.keys(this.props.data);
    const teamData = this.props.data;

    return (
      <div>
        {teamMembers.map((el, k) => {
          return (
            <div key={k}>
              <ul className="member-ul">
                <li className="data-li">
                  <img
                    alt="member"
                    src={teamData[el].photo}
                    className="member-img"
                    onClick={this.props.openModal}
                  />
                </li>
                <li className="data-li">{`Name: `}</li>
                <div className="long-text-wrapper">
                  <li className="long-text-data data-li">
                    {teamData[el].last_name} {teamData[el].first_name}
                  </li>
                </div>
                <li className="data-li">{`Platform: ${
                  teamData[el].platform
                }`}</li>
                <li className="data-li">{`Years: ${teamData[el].years}`}</li>
                <li className="data-li text-justified">{`Hobbies:`}</li>
                <div className="long-text-wrapper">
                  <li className="long-text-data data-li">
                    {teamData[el].hobbies}
                  </li>
                </div>
                <li className="data-li">{`Birthday: ${
                  teamData[el].birthday
                }`}</li>
              </ul>
              <hr className="member-separator" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Member;
