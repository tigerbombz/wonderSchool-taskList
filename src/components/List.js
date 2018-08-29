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

    console.log("this.state", this.state.tasks)
    const tasks = this.state.tasks;

    const filtered = tasks
      .reduce((obj, key) => {
        obj[key.group] = obj[key.group] || [];
        obj[key.group].push(key)
        return obj;
      }, {});


    // console.log("object values", Object.values(filtered));
    const groups = Object.values(filtered)
      .map(group => {
        group.map(item => {
          return item
        })
        return group
      })
    console.log("do i have my groups", groups)

    return (
      <div>
        <h1>Things to Do</h1>
        <div>
          {
            groups.map(group => {
              console.log(Object.values(group))
            })
          }
        </div>
      </div>
    )
  }
}

export default List;

// {
//   groups.map(group => {
    
//   })
//     return (
//       <div 
//         key ={task.id}
//         className="row" 
//       >
//         <h4>
//           <img src={group} />
//           Task Group {task.id}
//         </h4>
//         <Link 
//           to={{
//             pathname: `/lists/${task.id}`,
//             state: {
//               task: task
//             }
//           }}
//           component={ListItems}
//         >
//         Click Me
//         </Link>
//         <p>{task.completedAt} of completed {group.length}</p>
//       </div>
//     )
//   })
// }