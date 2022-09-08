
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import StudentService from '../services/StudentService'

const ListStudentComponent = () => {


    const [students, setStudents] = useState([])
    
    useEffect(() => {

        getAllStudents();
    }, [])

    const getAllStudents = () => {
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteStudents = (studentId) => {
       StudentService.deleteStudents(studentId).then((response) =>{
        getAllStudents();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Students </h2>
            <Link to = "/add-student" className = "btn btn-primary mb-2" > Add Student </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Student ID</th>
                    <th> Student First Name </th>
                    <th> Student Last Name </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                         students.map(
                        
                            students =>
                            <tr key = {students.id}> 
                                <td> {students.id} </td>
                                <td> {students.firstName} </td>
                                <td>{students.lastName}</td>
                                <td>
                                    {/* <Link className="btn btn-info" to={`/edit-student/${students.id}`} >Update</Link> */}
                                    <button className = "btn btn-danger" onClick = {() => deleteStudents(students.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                        
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentComponent