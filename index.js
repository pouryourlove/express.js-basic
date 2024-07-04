// create folder
// npm init -y
// npm i express
// create instance express
// provide port : 8000
// basic route /

import express from 'express'
import students from './routes/student.js'
// import students from './routes/student.js'
// import teachers from './routes/teacher.js'
const app = express() //create server

app.use("/students", students)

// app.use('/students', students);
// app.use('/teachers', teachers);

//Route params
//ecom/products/iphone/:iphone
// app.get('/ecom/products/iphone/:model', (req, res) => {
//     const {model} = req.params;
//     res.send(`iphone ${model} pro max`)
// })

// app.get('/product/:category/:id', (req, res) => {
//     const {category, id} = req.params;
//     res.send(`product category (${category}) & product id (${id})`)
// })

// app.get("/product/order/:day/:month/:year", (req, res) => {
//   const { day, month, year} = req.params;
//   res.send(`product was ordered on: ${day}/${month}/${year}`);
// });

app.param("id", (req, res, next, id) => {
    console.log(`id:${id}`)
    next()
})

app.get('/user/:id', (req, res) => {
    console.log('This is user id path')
    res.send('response is ok')
})


//http methods
//get -> retrive data
//post -> create/insert data
//put -> completely update data
//patch -> partially update dat
//delete -> delete data
//all -> any http request method

//basic routing
// app.get('/', (req,res) => {
//     res.send("home"); 
//     //send data to the user as a response
// });

// app.get('/about', (req, res) => {
//     res.send("<h1>about</h1>")
// });

// app.get('/contact', (req,res) => {
//     res.send("<h1>contact page</h1>")
// })

// // string pattern path
// app.get('/ab?cd',(req,res) => {
//     res.send("if the user hit (acd) or (abcd) then this will run")
// })

//regex
// app.get(/x/,(req,res)=> {
//     res.send('if the path includes the letter (x) it will work')
// })

// users/1234(four digit)
// app.get(/^\/users\/[0-9]{4}$/,(req,res)=> {
//     res.send('working')
// })

// app.get('/products/iphone',(req,res) =>{
//     res.send("This code will only run if you provide /products/iphone")
// });

//single callback function
// app.get('/single-cb',(req,res) =>{
//     res.send("single bacllback")
// });

//without next, we can't have more than 1 callback function
// app.get('/double-cb',(req,res,next) =>{
//     console.log("first callback");
//     next();
// },(req,res) => {
//     res.send("second callback")
// });
// const cb1 = (req,res,next) => {
//     console.log('first callback');
//     next()
// }
// const cb2 = (req,res,next) => {
//     console.log('second callback');
//     next()
// }
// const cb3 = (req,res) => {
//     console.log('third callback');
//     res.send("array of callbacks")
// }

// app.get("/array-cb", [cb1,cb2,cb3])

// const cb1 = (req,res,next) => {
//     console.log('first callbcak')
//     next()
// }
// const cb2 = (req,res,next) => {
//     console.log('second callbcak')
//     next()
// }

// app.get('/crayzness', [cb1, cb2], (req, res, next) => {
//     console.log('third callback');
//     next()
// }, (req,res,next) => {
//     console.log('fourth callback');
//     res.send('crazyness')
// })

//ugly code
// app.get('/student', (req,res) => {
//     res.send('all students')
// })
// app.post('/student', (req,res) => {
//     res.send('add new students')
// })
// app.put('/student', (req,res) => {
//     res.send('update students')
// })
// app.delete('/student', (req,res) => {
//     res.send('delete students')
// })

//refactor1
//app.route() 
// app
// .route('/student')
// .get((req,res) => res.send("all students"))
// .post((req,res)=> res.send("add new student"))
// .put((req,res)=> res.send("update student"))
// .delete((req,res)=> res.send("delete student"))

//refactor2
//router

// 1.create foutes folder and put your routes in a seperate file
// 2.create instance ofo express.Router()
// 3.instead of app.method, change that to "router.method"
// 4.export router
// 5.import router
// 6. use the (app.use) built-in middleware & provide your routes.

app.listen(8000, () => console.log('server up'))