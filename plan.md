# PLan of Action

- Initialise the project.
- Intialize the forst view.
- Create a room id.
- Add the ability to view own video.
- ability to allow others to stream the video.
- add styling.
- add the ability to create messages.
- add mute button.
- stop video button.

--- the video streaming is P2P
Node.JS
Socket.io
Express Server
PeerJS
WEBRTC


- npm init (to initialise nodeJS application)
- npm install express 
    Express is used to build the API.
    Express is a minimal and flexible Node.js webapplication that provides robust features.
    It provides a thin layer of fundamental web application.
- npm install -g nodemon
    -g to install globally

- nodemon server.js ( to run the server)
- room.ejs is a HTML file (ejs- embedded javascript where HTML can be coded because we can pass variables from backend to frontend)
-- uuid library can generate unique id.

-- PROMISE is a event that can happen in the future that can be resolved or not.

- Sockets.io (for real-time communication which is a library that uses web sockets.
    --Creates a channels so that the messgaes and traffic goes through the channel)

P2P with WebRTC we use PeerJS to send streams to different people. 

WEBRTC- open-sourse project that provides real-time communication via simple application programming interface.
PeerJs- wraps the browsers WebRTC's implementation to provide complete, configure easy to use p2p connection API. Equipped with nothing but an ID, a p2p dat or media stream connection to a main peer.

socket.emit => sending and 
socket.on => receiving.