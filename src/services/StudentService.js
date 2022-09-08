import axios from 'axios'

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/students';
//const STUDENT_BASE_REST_API = 'http://localhost:8080/studentsCreate';

class StudentService{

    getAllStudents(){
        return axios.get(STUDENT_BASE_REST_API_URL)
    }
    
    createStudents(students){
        return axios.post(STUDENT_BASE_REST_API_URL, students)
    }

    getStudentById(studentId){
        return axios.get(STUDENT_BASE_REST_API_URL + '/' + studentId);
    }

    updateStudents(studentId, students){
        return axios.put(STUDENT_BASE_REST_API_URL + '/' +studentId, students);
    }
    saveOrUpdateStudent(studentId, students){
        return axios.put(STUDENT_BASE_REST_API_URL + '/' +studentId, students);
    }
    deleteStudents(studentId){
        return axios.delete(STUDENT_BASE_REST_API_URL + '/' + studentId);
    }
}


export default new StudentService()