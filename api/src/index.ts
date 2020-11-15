import express from 'express';
import { Server as IoServer } from 'socket.io';
import { Server } from 'http';

const app = express();
app.set('port', process.env.PORT || 3089);

const http = new Server(app);
const io = new IoServer(http);

app.get('/', (req, res) => {
	res.send('hello world');
});

io.on('connection', socket => {
	console.log('a user connected');
	// whenever we receive a 'message' we log it out
	socket.on('message', function (message: any) {
		console.log(message);
	});
});

http.listen(3089, function () {
	console.log('listening on *:3089');
});
