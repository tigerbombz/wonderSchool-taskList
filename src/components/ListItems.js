import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import incomplete from '../svgs/Incomplete.svg';
import completed from '../svgs/Completed.svg';

class ListItems extends Component {
  constructor(props){
    super(props);

    this.state = {
      incomplete: true
    }
  }

  handleClick = (e) => {

    console.log(e.target.value)
  }

  render(){
    console.log("this.props", this.props.location.state.task)
    const tasks = this.props.location.state.task
    let status = this.state.incomplete;

    return(

      <div>
        <Link to="/">
          Back To Group
        </Link>
        <div>
          <h1>Task Group {tasks.id}</h1>
          <hr />
          <img src={incomplete} onClick={this.handleClick} /> 
          {tasks.task}
        </div>
      </div>
      
    )
  }
}

export default ListItems;