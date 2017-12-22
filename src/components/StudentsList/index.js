import React, {Component} from 'react'

import axios from 'axios';


class StudentsList extends Component{
  constructor(props){
    super(props);
    axios.get("/api/students").then((data) => {
      this.students = data
    }).catch(function (error) {
      alert("Something went wrong")
    });
  }
  render(){
    return(
      <div className="StudentsList">
        {
          this.students.map( (e) => {
            return <div>{e.name}</div>
          })
        }
      </div>
    )
  }
}

export default StudentsList;
