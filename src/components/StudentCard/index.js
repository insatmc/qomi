import React, {Component} from 'react';
import './StudentCard.css';


class StudentCard extends Component {
	render(){
		let student = this.props.student
		console.log(student)
		return (
      <div>
         <div className="container">
            <div className="row">
               <div >

                     <div className="card hovercard">
                        <div className="cardheader">
                        </div>
                        <div className="avatar">
                           <img alt="" src={this.props.student.src} />
                        </div>
                        <div className="info">
                           <div className="title">
                                 <h2>{student.fullName}</h2>
                           </div>
                           <hr className="hr-style1" />
                           <div className="desc"><h4>Location:</h4>{student.location} </div>
                           <div className="desc"><h4>Disponibility:</h4>{student.Disponibility} </div>
                           <div className="desc"><h4>Looking For:</h4>{student['looking for']} </div>
                           <div className="desc"><h4>Skills:</h4>{student.skills}</div>
                           <hr className="hr-style2" />
                           </div>
                        <div className="bottom">
                              <a className="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                                 <i className="fa fa-twitter"></i>
                              </a>
                              <a className="btn btn-danger btn-sm" rel="publisher"
                                href="https://plus.google.com/+ahmshahnuralam">
                                 <i className="fa fa-google-plus"></i>
                              </a>
                              <a className="btn btn-secondary btn-sm " rel="publisher"
                                href="https://plus.google.com/shahnuralam">
                                 <i className="fa fa-github"></i>
                              </a>
                              <a className="btn btn-primary btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                                 <i className="fa fa-linkedin"></i>
                              </a>
                        </div>
                     </div>

               </div>

            </div>
         </div>
         </div>
         )
	}
}

export default StudentCard
