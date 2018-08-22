import React from 'react';
import './teams.css';
import Member from '../components/member';

class Repository extends React.Component {

  render() {
    console.log(this.props);
    
    const myTemplates = Object.keys(this.props.templates);
    const templates = this.props.templates;

    return (
      <div>
        {
          myTemplates.map((el,k)=>{
            
          })
        }
      </div>
    )
  }
}

export default Repository;