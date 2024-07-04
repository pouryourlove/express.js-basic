import express from 'express';
import {allStudents,newStudent,updateStudent,deleteStudent} from '../controllers/student.js'
const router = express.Router()

// GET localhost:PORT/students/all
router.get('/all',allStudents)
// POST localhost:PORT/students/create
router.post('/create',newStudent)
// PUT localhost:PORT/students/update
router.put('/update',updateStudent)
// DELETE localhost:PORT/students/delete
router.delete('/delete',deleteStudent)

export default router;