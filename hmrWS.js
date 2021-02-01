import WebSocket from "ws";
import fs from "fs";

const wss = new WebSocket.Server({ port: 8081 });

console.log("Starting hmr WebSocket at port 8081");

wss.on("connection", function connection(ws) {
    console.log("client connected");
    const mainScript = "./main.js";
    console.log(`Watching for file changes on ${mainScript}`);

    fs.watch(mainScript, (event, filename) => {
        if (filename) {
            console.log(`${filename} file Changed`);
            ws.send("1");
        }
    });
});
