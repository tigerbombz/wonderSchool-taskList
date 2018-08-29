import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {Collapse} from 'react-collapse';

import ListItems from './ListItems';

import group from '../svgs/Group.svg';
import incomplete from '../svgs/Incomplete.svg';
import locked from '../svgs/Locked.svg';
import completed from '../svgs/Completed.svg';

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [
        {
          id: 1,
          group: "Purchases",
          task: "Go to the bank",
          dependencyIds: [],
          completedAt: null,
        },
        {
          id: 2,
          group: "Purchases",
          task: "Buy hammer",
          dependencyIds: [1],
          completedAt: null,
        },
        {
          id: 3,
          group: "Purchases",
          task: "Buy wood",
          dependencyIds: [1],
          completedAt: null,
        },
        {
          id: 4,
          group: "Purchases",
          task: "Buy nails",
          dependencyIds: [1],
          completedAt: null,
        },
        {
          id: 5,
          group: "Purchases",
          task: "Buy paint",
          dependencyIds: [1],
          completedAt: null,
        },
        {
          id: 6,
          group: "Build Airplane",
          task: "Hammer nails into wood",
          dependencyIds: [2, 3, 4],
          completedAt: null,
        },
        {
          id: 7,
          group: "Build Airplane",
          task: "Paint wings",
          dependencyIds: [5, 6],
          completedAt: null,
        },
        {
          id: 8,
          group: "Build Airplane",
          task: "Have a snack",
          dependencyIds: [],
          completedAt: null,
        }
      ],
      isOpened: false
    }
  }

  handleChange = (e) => {
    console.log("e is", e);
    //attempt 1
    // this.setState({completedAt: !this.state.completedAt});

    // attempt2
    this.setState(prevState => ({
      check: !prevState.completedAt
    }))
  }

  handleExpand = (e) => {
    this.setState(prevState =>({
      isOpened: !this.state.isOpened
    }))
  }

  render() {

    console.log("this.state", this.state.tasks)
    const tasks = this.state.tasks;

    const filtered = tasks
      .reduce((obj, key) => {
        obj[key.group] = obj[key.group] || [];
        obj[key.group].push(key)
        return obj;
      }, {});

    let statusIcon = '';
    // console.log("object values", Object.entries(filtered).length);

    return (
      <div>
        <h1>Things to Do</h1>
        <div>
          {Object.values(filtered).map((entry,idx) => {
            return (
              <div>
                <h2 onClick={this.handleExpand}><img src={group} /> Task Group {idx+1}</h2>
                {
                  entry.map(x => {
                    console.log("x is", x);
                    if(x.dependencyIds.length === 0){
                      statusIcon = <img src={incomplete} /> 
                    }
                    else if (x.dependencyIds.length > 0 ){
                      statusIcon = <img src={locked} />  
                    }
                    else if(this.state.completedAt !== null){
                      statusIcon = <img src={completed} /> 
                    }
                    return (
                      <Collapse isOpened={this.state.isOpened} >
                        <div>
                          <p onClick={this.handleChange}>{statusIcon} {x.task}</p>
                        </div>
                      </Collapse>
                    )
                  })
                }
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default List;

