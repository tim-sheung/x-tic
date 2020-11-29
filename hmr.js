// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8081");

// Listen for messages
socket.addEventListener("message", function (event) {
    console.log(event.data);
    if (event.data === "1") {
        location.reload();
    }
});

const el = document.createElement("div");
el.innerHTML = Math.random() * 100;
document.body.appendChild(el);
