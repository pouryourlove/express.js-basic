import express from 'express'
const router = express.Router()

router.get('/all',(req,res) => {
    res.send('all students')
})
router.post('/create',(req,res) => {
    res.send('sign in new students')
})
router.put('/update',(req,res) => {
    res.send('update students id')
})
router.delete('/delete',(req,res) => {
    res.send('remove students')
})

export default router;