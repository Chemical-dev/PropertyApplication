
import express, { Request, Response } from "express";
import router from './routes/index';
import db from "./config/config"
const app = express()
import logger from "morgan";


// db
// .authenticate()
// .then(function(err) {
//  console.log('Connection has been established successfully.');
// }, function (err) {
//  console.log('Unable to connect to the database:', err);
// });



app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({extended: false}))


const port = 7000
app.use('/', router);

app.get('/', (reqRequest, res:Response) => {
    res.send('welcome')
})



app.listen(port, () => {
    console.log('app running on port '+port);
    
})





export default app




