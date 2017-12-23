import React, {Component} from 'react'
import StudentCard from'../StudentCard'
import axios from 'axios';


class StudentsList extends Component{
  constructor(props){
    super(props);
    this.state = { students: [] }
    axios.get("/api/students").then((data) => {
      this.setState({ students: data.data })
    }).catch(function (error) {
      alert("Something went wrong")
    });
  }
  render(){

    return(
      <div className="StudentsList row">

      {
        this.state.students.map((el) => {
          return <div className=" col-sm-6 col-md-4 col-lg-3  "><StudentCard student={el} /></div>

        })
      }
      </div>
    )
  }
}

export default StudentsList;
