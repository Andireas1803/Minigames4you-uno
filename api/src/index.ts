import express from "express";

import {Server} from "http";

const app = express();
app.set("port", process.env.PORT || 3000);

const http = new Server(app);

// simple '/' endpoint sending a Hello World
// response
app.get("/", (req: any, res: any) => {
    res.send("hello world");
});

// start our simple server up on localhost:3000
http.listen(3089, function() {
    console.log("listening on *:3089");
});