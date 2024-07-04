import express from 'express'

const allStudents = (req, res) => {
    res.send('all students')
}

const newStudent = (req, res) => {
    res.send("Create students")
}

const updateStudent = (req, res) => {
  res.send("update students id");
};

const deleteStudent = (req, res) => {
  res.send("remove students");
};

export {allStudents,newStudent,updateStudent,deleteStudent}