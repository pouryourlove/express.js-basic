import express from 'express'
const router = express.Router()

router.get('/all',(req,res) => {
    res.send('all teacher')
})
router.post('/create',(req,res) => {
    res.send('sign in new teacher')
})
router.put('/update',(req,res) => {
    res.send('update teacher id')
})
router.delete('/delete',(req,res) => {
    res.send('remove teacher')
})

export default router;