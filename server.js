const express = require('express');
const app = express(); // intialises express.
// server
const server= require('http').Server(app);
//socketio
const io = require('socket.io')(server);
// setting uuid
const {v4: uuidv4} = require('uuid');
// importing peer
const {ExpressPeerServer} = require('peer');
const peerServer = ExpressPeerServer(server,{
    debug: true
});
// setting the engine to ejs.
app.set('view engine', 'ejs');
app.use(express.static('public'));
//url
app.use('/peerjs', peerServer);
app.get('/',(req,res)=>{
    res.redirect(`/${uuidv4()}`);
})

app.get('/:room',(req,res)=>{
    res.render('room', {roomID: req.params.room})
})

io.on('connection', socket=>{
    socket.on('join-room', (roomID, userID) =>{
        socket.join(roomID);
        socket.to(roomID).broadcast.emit('user-connected', userID);
        socket.on('message', message =>{
            io.to(roomID).emit('createmessage', message);
        })
    })
})


//message



//port
server.listen(process.env.PORT ||3030);