import http from "http";
import app from '../app'
import dotenv from 'dotenv'
import figlet from 'figlet'

dotenv.config();
const server = http.createServer(app);

server.listen(process.env.PORT || 5000);
server.on('error',(error)=>{
    console.error(error);
})

server.on('listening',()=>{
    console.log(figlet.textSync(`Listening`));    
    console.log(figlet.textSync(`at`));    
    console.log(figlet.textSync(`port`));    
    console.log(figlet.textSync(`${process.env.PORT || 5000}`));    
})

