
import WebSocketService from '/js/ws.js';
const wsService = new WebSocketService();

const msgEl = document.getElementById("messages");
const textEl = document.getElementById("message");
const userEl = document.getElementById("username");

wsService.onmessage = (data) => {
    msgEl.innerHTML += `<div class="chat_message">${data.data}</div>`;
};

document.getElementById("send").addEventListener("click", () => {
    wsService.sendMessage(textEl.value, userEl.value);
    msgEl.innerHTML += `<div class="chat_message_me">Username: ${userEl.value} , Message:${textEl.value}</div>`;
    textEl.value = "";
    userEl.value = "";
});