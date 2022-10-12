const exp= require('express');
const routes=require('./routes/restaurant');

const server=exp();

server.use('/',routes);
PORT=9090;
server.listen(PORT,()=>{
    console.log("port is running that is" + PORT)
});