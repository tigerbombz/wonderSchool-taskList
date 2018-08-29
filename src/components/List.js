import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import ListItems from './ListItems';

import group from '../svgs/Group.svg';

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
      ]
    }

  }

  render() {
    console.log("this.state", this.state)
    return (
      <div>
        <h1>Things to Do</h1>
        <div>
          {
            this.state.tasks.map(task => {
              if(task.completedAt === null){
                task.completedAt = 0;
              }
              return (
                <div 
                  key ={task.id}
                  className="row" 
                >
                  <h4>
                    <img src={group} />
                    Task Group {task.id}
                  </h4>
                  <Link 
                    to={{
                      pathname: `/lists/${task.id}`,
                      state: {
                        task: task
                      }
                    }}
                    component={ListItems}
                  >
                  Click Me
                  </Link>
                  <p>{task.completedAt} of {task.task.split(",").length} completed</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default List;